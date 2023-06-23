import { configureStore } from "@reduxjs/toolkit";
import formSlice from "../features/formSlice";
import usersSlice from "../features/usersSlice";
import postsSlice from "../features/postsSlice";

export const store = configureStore({
  reducer: {
    formSlice,
    usersSlice,
    postsSlice,
  },
});
