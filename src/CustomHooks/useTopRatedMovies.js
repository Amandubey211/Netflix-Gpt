import { useEffect } from "react";
import { ApiOptions, TopRatedMoviesCdnUrl } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../Utils/Redux/Slices/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const FetchTopRatedMovies = async () => {
    const res = await fetch(TopRatedMoviesCdnUrl, ApiOptions);
    const data = await res.json();
    dispatch(addTopRatedMovies(data.results));
  };

  useEffect(() => {
    FetchTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
