import React from "react";
import { LuInfo } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
const VideoTitle = ({ title, overview, releasedate, votes }) => {
  return (
    <>
      <div className="pt-[12%] w-screen aspect-video absolute ps-16 flex flex-col items-start gap-1 justify-start text-white bg-gradient-to-r from-black">
        <h3 className="text-5xl font-semibold">{title}</h3>
        <div className=" titleScroll w-1/3 max-h-36 py-4  overflow-y-auto  ">

          <p>
            {overview}
          </p>
        </div>
        <div className="flex gap-5  py-2   ">
          <span className="flex items-center gap-1 bg-red-600 rounded-sm  justify-end px-3">
            {" "}
            <span> {(votes).toFixed(1)} </span>
            <IoStarSharp />{" "}
          </span>
          <span> Release Data : {releasedate}</span>
        </div>

        <div className="">
          <button className="bg-white hover:bg-opacity-20  rounded-md p-3 m-1 px-10  border-2 text-black  ">
            <span className="flex justify-center gap-2 items-center">
              <FaPlay className="text-3xl " />
              <span>Play </span>
            </span>
          </button>
          <button className="p-3 m-1 px-10 border-2 rounded-md   ">
            <span className="flex justify-center gap-2 items-center">
              <LuInfo className="text-3xl " />
              <span>More Info </span>
            </span>
          </button>
        </div>

      </div>
    </>
  );
};

export default VideoTitle;
