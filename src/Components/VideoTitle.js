import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import MyModal from "./Modal";
const VideoTitle = ({ title, overview, releasedate, votes,movie }) => {
  const movieOverviewRef = useRef(null);
  useEffect(() => {
    movieOverviewRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [overview]);
  return (
    <>
      <div className="pt-[15%] w-screen aspect-video absolute ps-16 flex flex-col items-start gap-1 justify-start text-white bg-gradient-to-r from-black">
        <h3 className="text-5xl font-semibold ">{title}</h3>
        <div className=" titleScroll w-1/3 max-h-28    overflow-y-auto  ">
          <span ref={movieOverviewRef}></span>
          <p>{overview}</p>
        </div>
        <div className="flex gap-5  py-2   ">
          <span className="flex items-center gap-1 bg-red-600 rounded-sm  justify-end px-3">
            {" "}
            <span> {votes.toFixed(1)} </span>
            <IoStarSharp />{" "}
          </span>
          <span> Release Data : {releasedate}</span>
        </div>

        <div className="flex gap-2 items-center">
          <button className="bg-white hover:bg-opacity-20  rounded-md p-3 px-10  border-2 text-black  ">
            <span className="flex justify-center gap-2 items-center">
              <FaPlay className="text-3xl " />
              <span>Play </span>
            </span>
          </button>
          <MyModal  title={title} movie={movie}releasedate={releasedate}/>

        </div>
      </div>
    </>
  );
};

export default VideoTitle;
