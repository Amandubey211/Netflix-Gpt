import { useEffect } from "react";
import { ApiOptions, NowPlayingMoviesCdnUrl } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../Utils/Redux/Slices/moviesSlice";

const useNowPlaying = () => {
  const dispatch = useDispatch();

  const GetNowPlayingMovies = async () => {
    const res = await fetch(NowPlayingMoviesCdnUrl, ApiOptions);
    const data = await res.json();
    dispatch(addNowPlayingMovie(data?.results));
  };

  useEffect(() => {
    GetNowPlayingMovies(); 
  }, []);
};

export default useNowPlaying;
