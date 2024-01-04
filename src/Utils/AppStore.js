import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";

const AppStore = configureStore({
  reducer: {
    user: UserReducer,
  },
});

export default AppStore;
