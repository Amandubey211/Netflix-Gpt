import { useEffect } from "react";
import { ApiOptions, PopularMoviesCdnUrl } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../Utils/Redux/Slices/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const FetchPopularMovies = async () => {
    const res = await fetch(PopularMoviesCdnUrl, ApiOptions);
    const data = await res.json();
    console.log(data.results)
    dispatch(addPopularMovie(data?.results));
  };
  useEffect(() => {
    FetchPopularMovies();
  }, []);
};

export default usePopularMovies;
