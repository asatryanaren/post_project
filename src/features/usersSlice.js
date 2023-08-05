import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const usersAPI = createAsyncThunk(
  "posts",
  async (user, { dispatch }) => {
    const { email, password, navigate } = user;
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.data);
    const loggedInUser = response?.find(
      (user) => email === user.email && password === user.email
    );
    if (loggedInUser) {
      localStorage.setItem("email", email);
      localStorage.setItem("userId", loggedInUser.id);
      localStorage.setItem("name", loggedInUser.name); //////////////////////// avelacrel em sa anun@ stanalu hmar
      dispatch(updateUser(loggedInUser));
      navigate("/posts/page/1");
    } else {
      dispatch(addErrorMessage());
    }
  }
);

const initialState = {
  data: [],
  isLoggedIn: localStorage.getItem("email") ?? false,
  errorMessage: "",
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getEmailUser: (state, action) => {
      state.emailUser = action.payload;
    },
    getUsersData: (state, action) => {
      state.data = action.payload;
    },
    updateUser: (state, action) => {
      state.user = action.payload.loggedInUser;
      state.isLoggedIn = true;
      state.errorMessage = "";
    },
    addErrorMessage: (state) => {
      state.errorMessage = "Email or password is not correct";
    },
  },
});
export const selectUsersData = (state) => state.usersSlice.data;
export const selectIsLoggedIn = (state) => state.usersSlice.isLoggedIn;
export const selectErrorMessage = (state) => state.usersSlice.errorMessage;

export const { getEmailUser, getUsersData, updateUser, addErrorMessage } =
  usersSlice.actions;
export default usersSlice.reducer;
