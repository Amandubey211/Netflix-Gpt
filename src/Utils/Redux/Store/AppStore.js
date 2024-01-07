import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Slices/UserSlice";
import moviesReducer from "../Slices/moviesSlice";
import movieVideosReducer from "../Slices/movieVideosSlice";
import clickedMovieReducer from "../Slices/clickedMovieSlice";

const AppStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: moviesReducer,
    movievideos: movieVideosReducer,
    clickedMovie: clickedMovieReducer,
  },
});

export default AppStore;
