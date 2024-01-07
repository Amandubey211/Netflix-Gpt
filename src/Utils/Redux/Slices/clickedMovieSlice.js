import { createSlice } from "@reduxjs/toolkit";

const clickedMovieSlice = createSlice({
  name: "clickedMovie",
  initialState: {
    currentMovie: null,
  },
  reducers: {
    addClickedMovies: (state, action) => {
      state.currentMovie = action.payload;
    },
  },
});

export const { addClickedMovies } = clickedMovieSlice.actions;

export default clickedMovieSlice.reducer;
