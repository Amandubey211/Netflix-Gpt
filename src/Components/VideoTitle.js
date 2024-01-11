import React, { useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import { IoStarSharp } from "react-icons/io5";
import MyModal from "./Modal";
const VideoTitle = ({ title, overview, releasedate, votes, movie }) => {
  const movieOverviewRef = useRef(null);
  useEffect(() => {
    movieOverviewRef?.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [overview]);
  return (
    <>
      <div className="md:pt-[15%] pt-[20%] w-screen aspect-video absolute md:ps-16 ps-5 flex flex-col items-start gap-1 justify-start text-white bg-gradient-to-r from-black">
        <h3 className="md:text-5xl  text-2xl w-[75%] font-semibold max-h-16">{title}</h3>
        <div className=" titleScroll  md:w-1/3 md:block hidden max-h-28    overflow-y-auto  ">
          <span ref={movieOverviewRef}></span>
          <p>{overview}</p>
        </div>
        <div className=" flex   gap-2  py-1  md:w-1/3    ">
          <span className="md:flex hidden items-center   gap-1 bg-red-600 rounded-sm  justify-end md:px-3 px-1">
            {" "}
            <span> {votes.toFixed(1)} </span>
            <IoStarSharp className="md:block hidden" />{" "}
          </span>
          <span className=" md:block hidden"> {releasedate}</span>
        </div>

        <div className="flex gap-2 items-center">
          <button className="bg-white hover:bg-opacity-20  rounded-md p-1 md:p-3 md:px-10 px-4  border-2 text-black  ">
            <span className="flex justify-center gap-2 items-center">
              <FaPlay className="md:text-3xl text-xl  " />
              <span>Play </span>
            </span>
          </button>
          <MyModal title={title} movie={movie} releasedate={releasedate} />
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
