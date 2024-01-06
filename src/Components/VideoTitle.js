import React from "react";
import { LuInfo } from "react-icons/lu";
import { FaPlay } from "react-icons/fa";
const VideoTitle = ({ title, overview, releasedate }) => {
  return (
    <>
      <div className="pt-[15%] w-screen aspect-video absolute px-16 flex flex-col items-start justify-start text-white bg-gradient-to-r from-black">
        <h3 className="text-5xl font-semibold">{title}</h3>
        <p className="py-4 w-1/3">{overview}</p>
        {/* <b className="bg-yellow-400 p-1  rounded-md px-4">
          {" "}
          Release Data : {releasedate}
        </b> */}
        <div className="    ">
          <button className="bg-white hover:bg-opacity-20  rounded-md p-3 m-1 px-10  border-2 text-black  ">
            <span className="flex justify-center gap-2 items-center">
              <FaPlay className="text-3xl " />
              <span>play </span>

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
