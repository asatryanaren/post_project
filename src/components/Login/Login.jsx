import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {
  getLoginNewEmail,
  getLoginNewPassword,
  selectLoginEmail,
  selectLoginPassword,
  selectRegisteredUser,
} from "../../features/loginSlice";
import { getEmailUser, usersAPI } from "../../features/usersSlice";
import { TextField, Button, Typography, Grid, Paper } from "@material-ui/core";
import { loginStyles } from "./loginStyle";

const Login = () => {
  const dispatch = useDispatch();
  const validUser = useSelector(selectRegisteredUser);
  const email = useSelector(selectLoginEmail);
  const password = useSelector(selectLoginPassword);
  const getPassword = (e) => dispatch(getLoginNewPassword(e.target.value));
  const getEmail = (e) => {
    dispatch(getLoginNewEmail(e.target.value));
    dispatch(getEmailUser(e.target.value));
  };
  const [validedUser, setValidedUser] = useState(false);
  const styles = loginStyles();
  useEffect(() => {
    dispatch(usersAPI({ email, password }));
  }, [email, password]);

  return (
    <Grid>
      <Paper elevation={10} className={styles.paper}>
        <form onSubmit={(e) => e.preventDefault()}>
          <Typography variant="h5" className={styles.typography}>
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
            className={styles.textfield}
            type="password"
            value={password}
            required
            onChange={(e) => getPassword(e)}
          />
          {validedUser && (
            <Typography className={styles.validedUser}>
              Email or password is not correct
            </Typography>
          )}
          {validUser ? (
            <NavLink to="/posts/:page">
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className={styles.btn}
              >
                Enter
              </Button>
            </NavLink>
          ) : (
            <Button
              type="submit"
              variant="contained"
              fullWidth
              className={styles.btn}
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
export default Login;
