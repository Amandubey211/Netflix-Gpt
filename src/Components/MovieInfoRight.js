import React from "react";
import { useSelector } from "react-redux";

const MovieInfoRight = ({ movie }) => {
  const MovieVideos = useSelector((store) => store.movievideos.videos);

  const { title, tagline, overview, original_language, runtime, release_date } =
    movie;
  return (
    <div className="md:bg-red-300  rounded-2xl  gap-1  p-3 md:p-6 md:mx-4 flex flex-col justify-start">
      <div className="text-3xl font-bold pb-2 border-b-2">{title}</div>
      {tagline && (
        <div className="tagLine italic  md:text-sm font-semibold  ps-1  ">
          "{tagline}"
        </div>
      )}
      <div className="flex flex-col gap-1 p-1 ">
        <div className="font-semibold">
          <span className="md:text-3xl  text-2xl">
            {overview.substring(0, 1)}
          </span>
          <span className="md:text-1xl">{overview.substring(1)}</span>
        </div>
      </div>
      <div className=" py-1 rounded-lg text-md">
        Run-Time :{" "}
        <span className="font-bold">
          {runtime} Minutes/{(runtime / 60).toFixed(1)} Hrs{" "}
        </span>
      </div>
      <div className=" py-1 rounded-lg  text-md">
        Original Language :{" "}
        <span className="font-bold">{original_language.toUpperCase()} </span>
      </div>
      <div className=" py-1 rounded-lg  text-md">
        Released Date : <span className="font-bold">{release_date}</span>
      </div>

      <div className="flex flex-col gap-1 justify-start items-start border-t-2 pt-3">
        <h3 className="font-bold">Related Videos (scroll)</h3>
        {MovieVideos == [] ? (
          <b>No videos found</b>
        ) : (
          <div className="md:movieClips px-4 rounded-xl  flex py-2 gap-4 w-72 md:w-[30rem]   overflow-scroll items-center ">
            {MovieVideos?.slice(0, 5).map((video) => {
              return (
                <div key={video.id} className="">
                  <iframe
                    src={`https://www.youtube.com/embed/${video?.key}`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieInfoRight;
