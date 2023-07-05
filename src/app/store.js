import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/loginSlice";
import usersSlice from "../features/usersSlice";
import postsSlice from "../features/postsSlice";

export const store = configureStore({
  reducer: {
    loginSlice,
    usersSlice,
    postsSlice,
  },
});
