import { useEffect } from "react";
import { ApiOptions } from "../Utils/Constant";
import { useDispatch } from "react-redux"
import { AddMovieVideos } from "../Utils/Redux/Slices/movieVideosSlice";

const useMovieBackground = (movieId) => {
  const dispatch = useDispatch()
  const GetMovieBackgroundVideo = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      ApiOptions
    );

    const data = await res.json();
    dispatch(AddMovieVideos(data.results))

  };

  useEffect(() => {
    GetMovieBackgroundVideo();
  }, []);
};
export default useMovieBackground;
