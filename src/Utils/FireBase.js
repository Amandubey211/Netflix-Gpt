// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcJZQ3UZRQV2Hfswm9BQu8XvljEEE5EjQ",
  authDomain: "netflixgpt-fc6d4.firebaseapp.com",
  projectId: "netflixgpt-fc6d4",
  storageBucket: "netflixgpt-fc6d4.appspot.com",
  messagingSenderId: "159344410198",
  appId: "1:159344410198:web:5a98bc65f858f7193785f7",
  measurementId: "G-LVXNRZZ24T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
