import { createSlice } from "@reduxjs/toolkit";

const movieVideoSlice = createSlice({
  name: "movievideos",
  initialState: {
    videos:null,
  },
  reducers: {
    AddMovieVideos: (state, action) => {
      state.videos = action.payload;
    },
  },
});

export const { AddMovieVideos } = movieVideoSlice.actions;

export default movieVideoSlice.reducer;
