import React, { useRef, useState } from "react";
import Header from "./Header";
import CheckValidateData from "../Utils/ValidataForm";
import toast from "react-hot-toast";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/FireBase";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
const Login = () => {
  const [signIn, SetSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
  const [Loading, setLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const Navigate = useNavigate();
  const ToogleForm = () => {
    SetSignIn(!signIn);
  };
  const HandleValidation = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!email.current.value || !password.current.value) {
      toast.error("provide the required credentials");
      setLoading(false);
      return;
    }
    const validationErrMessage = CheckValidateData(
      email.current?.value,
      password.current?.value,
      userName?.current?.value
    );
    SetErrorMessage(validationErrMessage);
    setTimeout(() => {
      SetErrorMessage(null);
    }, 2000);

    if (validationErrMessage) {
     return  setLoading(false);
    }

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          toast.success(`user has been successfully signedUp`);
          setLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode);
          setLoading(false);
          Navigate("/browse");
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          toast.success("User signIn successfully");
          setLoading(false);
          Navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode);
          console.log(errorMessage);
          setLoading(false);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute bg-gradient-to-b from-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImage"
        />
      </div>

      <form className=" w-5/12 rounded-lg bg-opacity-80 bg-black text-white absolute px-10 py-6 my-16 mx-auto right-0 left-0">
        <div className="flex justify-start my-1">
          <h1 className="text-3xl py-3  font-bold ">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
        </div>
        {!signIn && (
          <input
            ref={userName}
            type="text"
            placeholder=" FullName"
            className="p-3  rounded-md my-2 w-full text-white bg-gray-700"
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-3  rounded-md my-2 w-full text-white bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="Enter Password"
          className="p-3 my-2 rounded-md w-full text-white bg-gray-700"
        />
        <div className="flex justify-start">
          <p className="text-red-500 font-semibold"> {errorMessage}</p>
        </div>
        <button
          type="submit"
          className="p-4 rounded-md px-10 w-full mt-6 mb-3  bg-red-500"
          onClick={HandleValidation}
        >
          {Loading ? <Spinner /> : <> {signIn ? "Sign In" : "Sign Up"}</>}
        </button>
        <div className="flex justify-between px-2  mb-12 ">
          <div className="flex items-center  cursor-pointer select-none gap-1 ">
            <input
              type="checkbox"
              className=" p-1  border-red-500"
              id="remember"
              name="remember me"
            />{" "}
            <label htmlFor="remember" className="cursor-pointer">
              Remember me
            </label>
          </div>
          <div className="flex hover:underline cursor-pointer">
            <span>Need help?</span>
          </div>
        </div>

        {signIn ? (
          <div className="flex gap-2 my-3">
            <p className="text-gray-600">New to Netflix?</p>
            <span
              onClick={ToogleForm}
              href="/"
              className=" hover:underline cursor-pointer font-semibold"
            >
              Sign Up
            </span>
          </div>
        ) : (
          <div className="flex gap-2 my-3">
            <p className="text-gray-600 ">Already a User?</p>
            <span
              onClick={ToogleForm}
              href="/"
              className=" hover:underline cursor-pointer font-semibold"
            >
              Sign In
            </span>
          </div>
        )}
      </form>
    </>
  );
};

export default Login;
