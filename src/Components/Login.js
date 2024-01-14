import React, { useRef, useState } from "react";
import Header from "./Header";
import CheckValidateData from "../Utils/ValidataForm";
import toast from "react-hot-toast";
import {
  updateProfile,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/FireBase";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AddUser } from "../Utils/Redux/Slices/UserSlice";
import { loginBackground, UserAvatar } from "../Utils/Constant";
const Login = () => {
  const [signIn, SetSignIn] = useState(true);
  const [errorMessage, SetErrorMessage] = useState(null);
  const [Loading, setLoading] = useState(false);
  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
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
      return setLoading(false);
    }

    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName?.current?.value,
            photoURL: UserAvatar,
          })
            .then(() => {
              const { uid, displayName, email, photoURL } = auth.currentUser;
              dispatch(
                AddUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              setLoading(false);
            })
            .catch((error) => {
              setLoading(false);
              toast.success(`Something went wrong`);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          toast.error(errorCode);
          setLoading(false);
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
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorCode);
          setLoading(false);
        });
    }
  };
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          className=" md:w-screen md:h-full h-screen  object-cover"
          src={loginBackground}
          alt="backgroundImage"
        />
      </div>

      <form className=" md:w-5/12 w-[80%]  rounded-lg bg-opacity-80 bg-black text-white absolute md:px-10 px-5 md:py-6 py-3   md:my-[6%] my-[20%]  mx-auto right-0 left-0">
        <div className="flex justify-start my-1">
          <h1 className="md:text-3xl text-xl md:py-3 py-1  md:font-bold  font-semibold">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
        </div>
        {!signIn && (
          <input
            ref={userName}
            type="text"
            placeholder="UserName"
            className="md:p-3  p-2  rounded-md md:my-2  my-1 w-full text-white bg-gray-700"
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="md:p-3  p-2  rounded-md md:my-2  my-1 w-full text-white bg-gray-700"
        />
        <input
          ref={password}
          type="text"
          placeholder="Enter Password"
          className="md:p-3  p-2  rounded-md md:my-2  my-1 w-full text-white bg-gray-700"
        />

        <div className="flex justify-start">
          <p className="text-red-500 font-semibold"> {errorMessage}</p>
        </div>
        <button
          type="submit"
          className="md:p-4  p-3 rounded-md px-10 w-full mt-6 mb-3  bg-red-500"
          onClick={HandleValidation}
        >
          {Loading ? <Spinner /> : <> {signIn ? "Sign In" : "Sign Up"}</>}
        </button>
        <div className="flex justify-between px-2  md:mb-12 mb-8 ">
          <div className="flex align-middle  cursor-pointer select-none gap-1 ">
            <input
              type="checkbox"
              className=" md:w-5 w-4  border-red-500"
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
          <div className="flex gap-1 align-middle md:my-3 my-2">
            <p className="text-gray-600">New to Netflix?</p>
            <span
              onClick={ToogleForm}
              href="/"
              className=" hover:underline text-1xl hover:text-blue-500 cursor-pointer font-semibold"
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
              className=" hover:underline  hover:text-blue-500   cursor-pointer font-semibold"
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
