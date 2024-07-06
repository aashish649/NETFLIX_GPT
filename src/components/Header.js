import React, { useEffect, useState } from "react";
import Logo from "../assets/Netflix_Logo_PMS.png";
import userIcon from "../assets/avatar-red.jpeg";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/FireBase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../redux/slices/userSlice";
import MovieHeadings from "./MovieHeadings";
import { Link } from "react-router-dom";
import { toggleGptsearch } from "../redux/slices/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/Constants";
import { changeLanguage } from "../redux/slices/languageSlice";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const [showSignOut, setShowSignOut] = useState(false);
  const [isDropdownClicked, setIsDropdownClicked] = useState(false);

  const handleShowSignOut = () => {
    setShowSignOut(!showSignOut);
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptToggle = () => {
    dispatch(toggleGptsearch());
  };

  const handleChangeLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  const handleDropDown = () => {
    setIsDropdownClicked(!isDropdownClicked);
  };

  return (
    <div className="absolute w-screen px-4 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center md:px-8 md:py-4">
      <Link to="/browse" className="flex items-center space-x-4">
        <img className="w-24 h-auto md:w-36" src={Logo} alt="logo" />
        {user && (
          <div className="hidden md:block">
            <MovieHeadings />
          </div>
        )}
      </Link>
      {user && (
        <div className="flex items-center space-x-4">
          {showGptSearch && (
            <div className="relative">
              <select
                onClick={handleChangeLanguage}
                className="appearance-none bg-gray-800 text-white py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-gray-700"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12l-6-6h12z" />
                </svg>
              </div>
            </div>
          )}
          <button
            onClick={handleGptToggle}
            className="p-2 w-28 h-9 flex items-center justify-center rounded-md text-white bg-red-600 text-xs md:text-base"
          >
            {showGptSearch ? "Home" : "Gpt Search"}
          </button>

          <div className="relative flex items-center space-x-2">
            <img
              onClick={handleShowSignOut}
              className="w-8 h-8 cursor-pointer hidden lg:block"
              src={userIcon}
              alt="user icon"
            />
            {
              showSignOut && (
              <button
                className="flex items-center text-start text-white font-semibold py-2 hover:text-gray-300"
                onClick={handleSignOut}
              >
                <span>Sign Out</span>
              </button>)
            }
            <GiHamburgerMenu
              className="text-red-600 lg:hidden  cursor-pointer text-2xl md:text-4xl"
              onClick={handleDropDown}
            />
          </div>
          {isDropdownClicked && (
            <div className="bg-rose-700 bg-opacity-90 rounded-b-xl px-4 py-2 absolute top-14 right-0 w-48 md:w-60">
              <button
                className="font-semibold text-start w-full text-white hover:text-gray-300"
                onClick={handleGptToggle}
              >
                {showGptSearch ? "Home" : "GPT Search"}
              </button>

              <ul className="flex flex-col font-semibold gap-2 text-white">
                <Link to="/nowplayingmovies" className="hover:text-gray-300">
                  <li>Now Playing</li>
                </Link>
                <Link to="/popularmovies" className="hover:text-gray-300">
                  <li>Popular</li>
                </Link>
                <Link to="/topratedmovies" className="hover:text-gray-300">
                  <li>Top Rated</li>
                </Link>
                <Link to="/trendingmovies" className="hover:text-gray-300">
                  <li>Trending</li>
                </Link>
                <Link to="/upcomingmovies" className="hover:text-gray-300">
                  <li>Upcoming</li>
                </Link>
              </ul>

              <button
                className="flex items-center text-start text-white font-semibold py-2 hover:text-gray-300"
                onClick={handleSignOut}
              >
                <span>Sign Out</span>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
export default Header;
