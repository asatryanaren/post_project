import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formEmail: "",
  formPassword: "",
  registeredUser: false,
  emails: [],
  data: [],
};
const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    getFormNewEmail: (state, action) => {
      state.formEmail = action.payload;
    },
    getFormNewPassword: (state, action) => {
      state.formPassword = action.payload;
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
export const selectFormEmail = (state) => state.formSlice.formEmail;
export const selectFormPassword = (state) => state.formSlice.formPassword;
export const selectEmails = (state) => state.formSlice.emails;
export const selectRegisteredUser = (state) => state.formSlice.registeredUser;
export const { getFormNewEmail, registered, getData, getFormNewPassword } =
  formSlice.actions;
export default formSlice.reducer;
