import React from "react";
import logo from "../Images/NetFlexLogo.png";
const Header = () => {
  return (
    <div className="w-44 z-10 absolute px-6 bg-gradient-to-b from-black py-2  ">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Header;
