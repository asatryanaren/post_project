import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData, registered } from "./loginSlice";
import axios from "axios";

export const usersAPI = createAsyncThunk(
  "posts",
  async (user, { dispatch }) => {
    const { email, password } = user;
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.data);
    dispatch(getData(response));
    dispatch(getUsersData(response));
    dispatch(registered({ email, password }));
  }
);

const initialState = {
  emailUser: "",
  emailsUsers: [],
  buttonState: false,
  data: [],
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
      state.userId = action.payload.map((id) => id.id);
      state.emailsUsers = action.payload.map((email) => email.email);
    },
  },
});
export const selectbuttonState = (state) => state.usersSlice.buttonState;
export const selectEmailUser = (state) => state.usersSlice.emailUser;
export const selectEmailsUsers = (state) => state.usersSlice.emailsUsers;
export const selectUsersData = (state) => state.usersSlice.data;

export const { getEmailUser, getUsersData } = usersSlice.actions;
export default usersSlice.reducer;
