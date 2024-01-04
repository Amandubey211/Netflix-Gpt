import React from "react";
import logo from "../Images/NetFlexLogo.png";
import toast, { Toaster } from "react-hot-toast";
import { signOut } from "firebase/auth";
import { auth } from "../Utils/FireBase";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const Navigate = useNavigate();
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        Navigate("/");
      })
      .catch((error) => {
        toast.error("something went wrong");
        console.log(error);
      });
  };
  return (
    <>
      <div className="w-screen z-10 absolute px-6 bg-gradient-to-b from-black py-2 flex justify-between ">
        <img className="w-40" src={logo} alt="logo" />
        <div>
          <button
            className="bg-red-500 p-2 rounded-md px-5"
            onClick={HandleSignOut}
          >
            Sign Out
          </button>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Header;
