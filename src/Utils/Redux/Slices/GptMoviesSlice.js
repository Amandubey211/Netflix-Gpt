import { createSlice } from "@reduxjs/toolkit";
const GptMoviesSlice = createSlice({
  name: "GptMovies",
  initialState: {
    suggestedMovies: null,
    suggestedNames: null,
  },
  reducers: {
    addGptSuggestedMovies: (state, action) => {
      state.suggestedMovies = action.payload;
    },
    addGptSuggestedNames: (state, action) => {
      state.suggestedNames = action.payload;
    },
    // removeGptSuggestedMovies: (state, action) => {
    //   state.suggestedMovies.length = 0;
    // },
  },
});
export const {
  addGptSuggestedMovies,
  addGptSuggestedNames,
  // removeGptSuggestedMovies,
} = GptMoviesSlice.actions;

export default GptMoviesSlice.reducer;
