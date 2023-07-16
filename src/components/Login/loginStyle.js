import { makeStyles } from "@material-ui/core";
export const loginStyles = makeStyles({
  paper: {
    width: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "auto",
    padding: "20px",
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    "&:hover": {
      backgroundColor: "#3A43F6",
      color: "white",
    },
  },
  errorMessage: { color: "red", marginBottom: "13px" },
  typograhy: { marginBottom: "20px", textAlign: "center" },
  textfield: { margin: "15px 0" },
});
