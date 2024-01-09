/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnwmx47TYEITqIdyl5hBydrLZ3McWXRCI",
  authDomain: "netflixgpt001.firebaseapp.com",
  projectId: "netflixgpt001",
  storageBucket: "netflixgpt001.appspot.com",
  messagingSenderId: "912682930434",
  appId: "1:912682930434:web:7f39bf061d430d4c08321b",
  measurementId: "G-8LLW2FTWLM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
