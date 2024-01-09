import { useEffect } from "react";
import { ApiOptions, NowPlayingMoviesCdnUrl } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../Utils/Redux/Slices/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const NowPlaying = useSelector((store) => store.movies.nowPlayingMovies);

  const GetNowPlayingMovies = async () => {
    const res = await fetch(NowPlayingMoviesCdnUrl, ApiOptions);
    const data = await res.json();
    dispatch(addNowPlayingMovie(data?.results));
  };

  useEffect(() => {
    !NowPlaying && GetNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
