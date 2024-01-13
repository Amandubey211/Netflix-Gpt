import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "ChacheSearches",
  initialState: {},
  reducers: {
    AddchacheResults: (state, actions) => {
      state = Object.assign(state, actions.payload);
    },
  },
});

export const { AddchacheResults } = searchSlice.actions;
export default searchSlice.reducer;
