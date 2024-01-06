import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ AllMovies, title }) => {
  return (
    <div className="p-5 ">
      <h2 className=" text-2xl text-white mx-3 px-3 py-2">{title}</h2>
      <div className=" movieLists flex gap-8  overflow-x-scroll items-center ">
        {AllMovies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
