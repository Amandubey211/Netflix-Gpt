import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSearchSuggesstons from "./GptSearchSuggesstons";
import { loginBackground } from "../Utils/Constant";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute w-screen -z-10">
        <img
          src={loginBackground}
          alt="Background"
          className=" md:w-screen h-screen object-cover"
        />
      </div>
      <div className="pt-24 flex justify-center items-center ">
        <GptSearchBar />
      </div>
      <GptSearchSuggesstons />
    </div>
  );
};

export default GptSearch;
