import { useEffect } from "react";
import { ApiOptions } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addClickedMovies } from "../Utils/Redux/Slices/clickedMovieSlice";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useGetClickedMovie = (movieId) => {
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const FetchClickedMovie = async () => {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
        ApiOptions
      );

      const data = await res.json();
      dispatch(addClickedMovies(data?.results));
    } catch {
      toast.error("something went wrong");
    }
  };

  useEffect(() => {
    FetchClickedMovie();
  }, []);
};

export default useGetClickedMovie;
