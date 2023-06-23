import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  getData,
  getFormNewEmail,
  selectFormEmail,
  selectRegisteredUser,
} from "../../features/formSlice";
import { registered } from "../../features/formSlice";
import {
  getEmailUser,
  getUsersData,
  selectUsersData,
} from "../../features/usersSlice";

const FormPage = () => {
  const [password, setPassword] = useState("");
  const validUser = useSelector(selectRegisteredUser);
  const dispatch = useDispatch();

  const email = useSelector(selectFormEmail);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.data)
      .then((resp) => {
        dispatch(getData([...resp]));
        dispatch(getUsersData([...resp]));
      });
    dispatch(registered(email));
  }, [email]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p>Login to your account</p>
      <input
        type="email"
        value={email}
        placeholder="email"
        required
        onChange={(e) => {
          dispatch(getFormNewEmail(e.target.value));

          return dispatch(getEmailUser(e.target.value));
        }}
      />
      <input
        type="password"
        value={password}
        placeholder="Password"
        required
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">
        {validUser ? <NavLink to="/posts"> Enter</NavLink> : "Enter"}
      </button>
    </form>
  );
};
export default FormPage;
