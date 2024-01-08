import { createSlice } from "@reduxjs/toolkit";
const GptMoviesSlice = createSlice({
  name: "GptMovies",
  initialState: {
    suggestedMovies: null,
    suggestedNames:null
  },
  reducers: {
    addGptSuggestedMovies: (state, action) => {
      state.suggestedMovies = action.payload;
    },
    addGptSuggestedNames:(state,action)=>{
        state.suggestedNames = action.payload
    }
  },
});
export const { addGptSuggestedMovies,addGptSuggestedNames } = GptMoviesSlice.actions;

export default GptMoviesSlice.reducer;
