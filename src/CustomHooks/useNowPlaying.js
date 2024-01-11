import { useEffect } from "react";
import { ApiOptions, NowPlayingMoviesCdnUrl } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../Utils/Redux/Slices/moviesSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useNowPlaying = () => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const NowPlaying = useSelector((store) => store.movies.nowPlayingMovies);

  const GetNowPlayingMovies = async () => {
    try {
      const res = await fetch(NowPlayingMoviesCdnUrl, ApiOptions);
      const data = await res.json();
      dispatch(addNowPlayingMovie(data?.results));
    } catch (error) {
      toast.error("somehting went wrong");
      // Navigate("/error", { state: { errorMessage: error.message } });
    }
  };

  useEffect(() => {
    !NowPlaying && GetNowPlayingMovies();
  }, []);
};

export default useNowPlaying;
