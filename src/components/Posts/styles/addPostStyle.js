import { makeStyles } from "@material-ui/core";

export const addPostStyle = makeStyles({
  btn: {
    backgroundColor: "blue",
    color: "white",
    display: "block",

    marginTop: "30px",
    width: "120px",
    "&:disabled": {
      backgroundColor: "blue",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#3A43F6",
      color: "white",
    },
  },
  link: {
    textDecoration: "none",
    display: "block",
    width: "120px",
    margin: "0 auto",
  },
  paper: {
    padding: "30px",
    width: "40%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    backgroundColor: "#F3F6F9",
  },
  textField: {
    marginTop: "20px",
  },
});
