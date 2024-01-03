import React from "react";
import Header from "./Header";

const Login = () => {
  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="backgroundImage"
        />
      </div>

      <form className=" w-3/12 bg-black text-white absolute p-10 my-36 mx-auto right-0 left-0">
        <h1 className="text-3xl font-bold ">SignIn</h1>
        <input type="text" placeholder="enter email" className="p-2 m-2" />
        <input type="text" placeholder="enter password" className="p-2 m-2" />
        <button className="p-4 m-4">SignIn</button>
      </form>
    </>
  );
};

export default Login;
