import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ AllMovies, title }) => {
  return (
    <div className="md:px-8  px-2 ">
      <h2 className=" md:text-xl text-lg text-white py-1">{title}</h2>
      <div className=" movieLists flex pb-1 gap-5  overflow-x-scroll items-center ">
        {AllMovies?.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};

export default MovieList;
