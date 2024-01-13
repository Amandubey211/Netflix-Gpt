import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../Slices/UserSlice";
import moviesReducer from "../Slices/moviesSlice";
import movieVideosReducer from "../Slices/movieVideosSlice";
import clickedMovieReducer from "../Slices/clickedMovieSlice";
import GptSearchReducer from "../Slices/GptSlice";
import GptSuggestedReducer from "../Slices/GptMoviesSlice";
import ChacheSearchesReducer from "../Slices/searchSlice";

const AppStore = configureStore({
  reducer: {
    user: UserReducer,
    movies: moviesReducer,
    movievideos: movieVideosReducer,
    clickedMovie: clickedMovieReducer,
    Gpt: GptSearchReducer,
    GptMovies: GptSuggestedReducer,
    ChacheSearches: ChacheSearchesReducer,
  },
});

export default AppStore;
