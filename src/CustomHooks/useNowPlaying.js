import { useEffect, useState } from "react";
import { ApiOptions } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../Utils/Redux/Slices/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const GetNowPlayingMovies = async () => {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      ApiOptions
    );
    const data = await res.json();
    dispatch(addNowPlayingMovie(data?.results));
  };

  useEffect(() => {
    GetNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
