import { useEffect } from "react";
import { ApiOptions, UpComingMoviesCdnUrl } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../Utils/Redux/Slices/moviesSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const FetchUpComingMovies = async () => {
    const res = await fetch(UpComingMoviesCdnUrl, ApiOptions);
    const data = await res.json();
    dispatch(addUpComingMovies(data.results));
  };
  useEffect(() => {
    FetchUpComingMovies();
  }, []);
};

export default useUpComingMovies;
