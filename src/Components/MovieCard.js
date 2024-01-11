import React from "react";
import { ApiOptions, ImageCdnUrl } from "../Utils/Constant";
import { addClickedMovies } from "../Utils/Redux/Slices/clickedMovieSlice";
import { useDispatch, useSelector } from "react-redux";
import { AddMovieVideos } from "../Utils/Redux/Slices/movieVideosSlice";
import { toggleGptSearch } from "../Utils/Redux/Slices/GptSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const GptbtnStatus = useSelector((store) => store.Gpt.showGptSearch);
  const FetchClickedMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`,
      ApiOptions
    );

    const data = await res.json();
    dispatch(addClickedMovies(data));
  };
  const GetMovieBackgroundVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
      ApiOptions
    );

    const data = await res.json();
    dispatch(AddMovieVideos(data.results));
  };
  return (
    <div className="">
      {!movie.poster_path ? null : (
        <div
          className=" md:w-32 w-24  rounded-md movieCard transition ease-in-out delay-50 hover:scale-125  hover:z-50 hover:cursor-pointer"
          onClick={() => {
            FetchClickedMovie();
            GetMovieBackgroundVideo();
            if (GptbtnStatus === true) {
              dispatch(toggleGptSearch());
            }
          }}
        >
          <img
            className="rounded-md"
            src={ImageCdnUrl + movie.poster_path}
            alt={movie.original_title}
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;
