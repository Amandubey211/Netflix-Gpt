import React from "react";
import VideoBackground from "./VideoBackground";
import { IoStarSharp } from "react-icons/io5";
const MovieInfoLeft = ({ movie }) => {
  const {
    id,
    genres,
    adult,
    production_companies,

    production_countries,
    vote_average,
  } = movie;

  return (
    <div className="flex flex-col bg-red-100 rounded-2xl  md:p-3 p-2 gap-1     ">
      <div className="trailer rounded-md    ">
        <VideoBackground movieId={id} width="md:w-[30rem] w-86  rounded-lg" />
      </div>
      <div className="font-bold">Trailer</div>
      <div className="genere py-2 rounded-lg flex  gap-3 items-center justify-star  bg-opacity-40">
        {genres?.map((genere) => {
          return (
            <span
              key={genere.id}
              className=" z-30 rounded-sm bg-yellow-500 px-4"
            >
              {genere.name}
            </span>
          );
        })}
      </div>

      <div className="flex justify-start">
        <div
          className={`votes p-1 px-3 flex gap-2 items-center  rounded-lg font-bold ${
            vote_average.toFixed(1) > 6 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span>{vote_average.toFixed(1)} </span>
          <IoStarSharp />
        </div>
        {adult && <span className="bg-red-500">Adult</span>}
      </div>
      <div className="p-3 mt-3 bg-red-300 rounded-lg">
        <div className="flex flex-col gap-1 ">
          <b className="text-1xl">Produced by </b>
          <div className="flex justify-start items-center gap-2 flex-wrap">
            {production_companies.slice(0, 3)?.map((company) => {
              return (
                <div key={company.id}>
                  {company.logo_path && (
                    <div className="flex flex-col companyLogo items-center justify-center gap-2  p-1  rounded-lg    w-16 h-16   md:w-24 md:h-24 ">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${company?.logo_path}`}
                        alt={company.id}
                      />
                    </div>
                  )}{" "}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieInfoLeft;
