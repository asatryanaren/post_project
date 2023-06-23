import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: [],
  emailUser: "",
  emailsUsers: [],
  buttonState: false,
  users: [],
  data: [],
};
const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    getEmailUser: (state, action) => {
      state.emailUser = action.payload;
      console.log(state.emailUser);
    },
    getUsers: (state, action) => {
      state.users = action.payload;
    },
    getUsersData: (state, action) => {
      state.data = action.payload;
      state.userId = action.payload.map((id) => id.id);
      state.emailsUsers = action.payload.map((email) => email.email);
    },
  },
});
export const selectUserId = (state) => state.usersSlice.userId;
export const selectbuttonState = (state) => state.usersSlice.buttonState;
export const selectEmailUser = (state) => state.usersSlice.emailUser;
export const selectEmailsUsers = (state) => state.usersSlice.emailsUsers;

export const selectUsers = (state) => state.usersSlice.users;
export const selectUsersData = (state) => state.usersSlice.data;
export const { getEmailUser, getUsers, getUsersData } = usersSlice.actions;
export default usersSlice.reducer;
