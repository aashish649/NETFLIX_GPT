import React from "react";
import Header from "./Header";
import Background from "../assets/background.jpg";
import { useState } from "react";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/slices/userSlice";



const Login = () => {
  const [formData, setFormData] = useState({
    email: "user12@gmail.com",
    password: "User@123456",
    name: "",
  });

  const dispatch = useDispatch();

  const [isSignInForm, SetIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleButtonClick = () => {
    const message = checkValidData(formData.email, formData.password);

    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Sign up logic
      createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: formData.name,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(auth, formData.email, formData.password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    SetIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src={Background}
          alt="background"
          className="h-screen md:h-full object-cover"
        />
      </div>
      <form
        onSubmit={(event) => event.preventDefault()}
        className="absolute text-white px-12 py-4  bg-black my-20 mx-auto right-0 left-0 w-[85%] md:w-1/3 text-center rounded-lg bg-opacity-80 "
      >
        <h1 className="text-start font-bold text-[26px] md:text-3xl py-3 md:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700 outline"
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700 outline"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          className="p-3 md:p-4 px-4 my-2 w-full bg-gray-700 outline"
        />

        {/* Error Message */}

        <p className="text-red-600 text-center text-lg font-bold px-5 py-3">
          {errorMessage}
        </p>

        <button
          className="p-2 md:p-4 my-3 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-2  text-start cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};
export default Login;
