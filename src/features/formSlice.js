import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  formEmail: "",
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
    registered: (state, action) => {
      state.registeredUser = state.emails.includes(action.payload);
    },
    getData: (state, action) => {
      state.data = action.payload;
      state.emails = state.emails = action.payload.map((email) => email.email);
    },
  },
});
export const selectFormEmail = (state) => state.formSlice.formEmail;
export const selectEmails = (state) => state.formSlice.emails;
export const selectRegisteredUser = (state) => state.formSlice.registeredUser;
export const { getFormNewEmail, registered, getData } = formSlice.actions;
export default formSlice.reducer;
