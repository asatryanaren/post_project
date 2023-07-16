import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectErrorMessage, usersAPI } from "../../features/usersSlice";
import { TextField, Button, Typography, Grid, Paper } from "@material-ui/core";
import { loginStyles } from "./loginStyle";
import { useState } from "react";

const Login = () => {
  const errorMessage = useSelector(selectErrorMessage);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const styles = loginStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(usersAPI({ email, password, navigate }));
  };

  return (
    <Grid>
      <Paper elevation={10} className={styles.paper}>
        <form onSubmit={onSubmit}>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && (
            <Typography className={styles.errorMessage}>
              {errorMessage}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            fullWidth
            className={styles.btn}
          >
            Enter
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};
export default Login;
