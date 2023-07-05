import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loginEmail: "",
  loginPassword: "",
  registeredUser: false,
  emails: [],
  data: [],
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    getLoginNewEmail: (state, action) => {
      state.loginEmail = action.payload;
    },
    getLoginNewPassword: (state, action) => {
      state.loginPassword = action.payload;
    },
    registered: (state, action) => {
      const { email, password } = action.payload;
      state.registeredUser =
        state.emails.includes(email) && state.emails.includes(password);
    },
    getData: (state, action) => {
      state.data = action.payload;
      state.emails = state.emails = action.payload.map((email) => email.email);
    },
  },
});
export const selectLoginEmail = (state) => state.loginSlice.loginEmail;
export const selectLoginPassword = (state) => state.loginSlice.loginPassword;
export const selectEmails = (state) => state.loginSlice.emails;
export const selectRegisteredUser = (state) => state.loginSlice.registeredUser;
export const { getLoginNewEmail, registered, getData, getLoginNewPassword } =
  loginSlice.actions;
export default loginSlice.reducer;
