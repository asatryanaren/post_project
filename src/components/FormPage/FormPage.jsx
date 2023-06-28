import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import axios from "axios";
import {
  getData,
  getFormNewEmail,
  getFormNewPassword,
  selectFormEmail,
  selectFormPassword,
  selectRegisteredUser,
} from "../../features/formSlice";
import { registered } from "../../features/formSlice";
import {
  getEmailUser,
  getUsersData,
  selectUsersData,
} from "../../features/usersSlice";
import { TextField, Button, Typography, Grid, Paper } from "@material-ui/core";
import {
  buttonStyle,
  paperStyle,
  typograhyStyle,
  validedUserStyle,
} from "./formPageStyle";

const FormPage = () => {
  const dispatch = useDispatch();
  const validUser = useSelector(selectRegisteredUser);
  const email = useSelector(selectFormEmail);
  const password = useSelector(selectFormPassword);
  const getPassword = (e) => dispatch(getFormNewPassword(e.target.value));
  const getEmail = (e) => {
    dispatch(getFormNewEmail(e.target.value));
    return dispatch(getEmailUser(e.target.value));
  };
  const userData = useSelector(selectUsersData);
  const [validedUser, setValidedUser] = useState(false);
  useEffect(() => {
    return async () => {
      const response = await axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.data);
      dispatch(getData(response)); //
      dispatch(getUsersData(response)); //
      dispatch(registered({ email, password }));
      return response;
    };
  }, [email, password, userData]);

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Typography variant="h5" style={typograhyStyle}>
            Login to your account
          </Typography>
          <TextField
            label="email"
            variant="outlined"
            fullWidth
            type="email"
            value={email}
            required
            onChange={(e) => getEmail(e)}
          />

          <TextField
            label="password"
            variant="outlined"
            fullWidth
            style={{ margin: "15px 0" }}
            type="password"
            value={password}
            required
            onChange={(e) => getPassword(e)}
          />
          {validedUser && (
            <Typography style={validedUserStyle}>
              Email or password is not correct
            </Typography>
          )}
          {validUser ? (
            <NavLink to="/posts">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                style={buttonStyle}
              >
                Enter
              </Button>
            </NavLink>
          ) : (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              style={buttonStyle}
              onClick={() => setValidedUser(true)}
            >
              Enter
            </Button>
          )}
        </form>
      </Paper>
    </Grid>
  );
};
export default FormPage;
