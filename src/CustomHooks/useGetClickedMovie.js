import { useEffect } from "react";
import { ApiOptions } from "../Utils/Constant";
import { useDispatch } from "react-redux";
import { addClickedMovies } from "../Utils/Redux/Slices/clickedMovieSlice";

const useGetClickedMovie = (movieId) => {
    const dispatch = useDispatch();
    const FetchClickedMovie = async () => {
        const res = await fetch(
            `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
            ApiOptions
        );

        const data = await res.json();
        console.log(data);
        dispatch(addClickedMovies(data?.results));
    };

    useEffect(() => {
        FetchClickedMovie();
    }, []);
};

export default useGetClickedMovie;
