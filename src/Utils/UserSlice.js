import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    AddUser: (state, action) => {
      return action.payload;
    },
    RemoveUser: (state, action) => {
      return null;
    },
  },
});

export const { AddUser, RemoveUser } = userSlice.actions;

export default userSlice.reducer;
