import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "Gpt",
  initialState: {
    showGptSearch: false,
    loadingGptSearch: false,
  },

  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    toggleLoadingGptSearch: (state, action) => {
      state.loadingGptSearch = action.payload;
    },
  },
});

export const { toggleGptSearch, toggleLoadingGptSearch } = GptSlice.actions;

export default GptSlice.reducer;
