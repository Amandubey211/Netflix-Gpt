import React from "react";
import logo from "../Images/NetFlexLogo.png";
import { Toaster } from "react-hot-toast";
const Header = () => {
  return (
    <div className="w-screen z-10 absolute px-6 bg-gradient-to-b from-black py-2   ">
      <img  className="w-40" src={logo} alt="logo" />
      <Toaster />
    </div>
  );
};

export default Header;
