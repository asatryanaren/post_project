import { makeStyles } from "@material-ui/core";

export const writePostStyle = makeStyles({
  btn: {
    backgroundColor: "blue",
    color: "white",
    display: "block",
    margin: "20px auto",
    "&:disabled": {
      backgroundColor: "blue",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#3A43F6",
      color: "white",
    },
  },
  paper: {
    padding: "20px",
    position: "absolute",
    top: "80px",
    right: "95px",
  },
  container: { display: "block", marginLeft: "50px " },
});
