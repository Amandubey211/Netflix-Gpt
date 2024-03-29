import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import botLoaing from "../Images/BotLoading.gif";
const GptSearchSuggesstons = () => {
  const suggestedMovies = useSelector(
    (store) => store.GptMovies.suggestedMovies
  );
  const loading = useSelector((store) => store.Gpt.loadingGptSearch);

  const suggestedNames = useSelector((store) => store.GptMovies.suggestedNames);
  if (!suggestedNames) return;

  return (
    <>
      {loading ? (
        <div className="flex justify-center  mb-10 items-center">
          <div className="flex flex-col bg-slate-600 rounded-2xl  justify-center items-center   ">
            <img
              src={botLoaing}
              className="bg-red-600 md:w-44 w-32 bg-opacity-80 rounded-xl"
              alt="loading animation"
            />
          </div>
        </div>
      ) : (
        <div className="  scroll-mt-10 bg-black bg-opacity-90">
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
      )}
    </>
  );
};

export default GptSearchSuggesstons;
