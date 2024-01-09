import React from "react";
import MovieInfoLeft from "./MovieInfoLeft";
import MovieInfoRight from "./MovieInfoRight";

const MovieInfo = ({ movie }) => {
  return (
    <div className="flex flex-col">
      <div className=" flex justify-between  flex-wrap md:flex-nowrap gap-2  ">
        <MovieInfoLeft movie={movie} />
        <MovieInfoRight movie={movie} />
      </div>
    </div>
  );
};

export default MovieInfo;
