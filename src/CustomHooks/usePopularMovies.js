import { useEffect } from "react";
import { ApiOptions, PopularMoviesCdnUrl } from "../Utils/Constant";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovie } from "../Utils/Redux/Slices/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const PopularMovies = useSelector((store) => store.movies.popularMovies);

  const FetchPopularMovies = async () => {
    const res = await fetch(PopularMoviesCdnUrl, ApiOptions);
    const data = await res.json();
    dispatch(addPopularMovie(data?.results));
  };
  useEffect(() => {
    !PopularMovies && FetchPopularMovies();
  }, []);
};

export default usePopularMovies;
