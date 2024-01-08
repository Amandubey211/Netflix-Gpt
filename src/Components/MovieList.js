import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ AllMovies, title }) => {
  return (
    <div className="px-8  ">
      <h2 className=" text-2xl text-white py-1">{title}</h2>
      <div className=" movieLists flex py-2 gap-5  overflow-x-scroll items-center ">
        {AllMovies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
