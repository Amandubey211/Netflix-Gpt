import React from "react";
import { ApiOptions, ImageCdnUrl } from "../Utils/Constant";
import useGetClickedMovie from "../CustomHooks/useGetClickedMovie";
import { addClickedMovies } from "../Utils/Redux/Slices/clickedMovieSlice";
import { useDispatch } from "react-redux";
import { AddMovieVideos } from "../Utils/Redux/Slices/movieVideosSlice";

const MovieCard = ({ movie }) => {
  const dispatch = useDispatch();
  const FetchClickedMovie = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`,
      ApiOptions
    );

    const data = await res.json();
    console.log(data);
    dispatch(addClickedMovies(data));
  };
  const GetMovieBackgroundVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`,
      ApiOptions
    );

    const data = await res.json();
    console.log(data);
    dispatch(AddMovieVideos(data.results));
  };
  return (
    <div>
      <div
        className="w-32 rounded-md transition ease-in-out delay-75 hover:scale-125 hover:cursor-pointer"
        onClick={() => {
          FetchClickedMovie();
          GetMovieBackgroundVideo();
        }}
      >
        <img
          className="rounded-md"
          src={ImageCdnUrl + movie.poster_path}
          alt={movie.original_title}
        />
      </div>
    </div>
  );
};

export default MovieCard;
