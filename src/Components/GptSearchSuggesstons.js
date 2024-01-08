import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSearchSuggesstons = () => {
  const suggestedMovies = useSelector(
    (store) => store.GptMovies.suggestedMovies
  );
  console.log(suggestedMovies);
  // const sortedmovie = suggestedMovies
  // ?.slice()
  // .sort((a, b) => b.total_results - a.total_results);
  const suggestedNames = useSelector((store) => store.GptMovies.suggestedNames);
  if (!suggestedNames) return;
  return (
    <div className=" bg-gradient-to-r from-black bg-opacity-80  rounded-lg">
      {suggestedNames?.map((movieName, index) => {
        return (
          <div key={movieName}>
            <MovieList
              title={movieName}
              AllMovies={suggestedMovies[index].results}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GptSearchSuggesstons;
