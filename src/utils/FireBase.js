// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "netflixgpt-5fb5c.firebaseapp.com",
  projectId: "netflixgpt-5fb5c",
  storageBucket: "netflixgpt-5fb5c.appspot.com",
  messagingSenderId: "684389175777",
  appId: process.env.REACT_APP_FIREBASE_ID,
  measurementId: "G-XEQB5LK5ZN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();