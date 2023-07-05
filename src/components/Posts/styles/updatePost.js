import { makeStyles } from "@material-ui/core";

export const updatePostStyle = makeStyles({
  container: {
    width: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    backgroundColor: "#8DA399",
    boxSizing: "border-box",
  },
  textField: { margin: "5px 0" },
  btn: {
    marginTop: "20px",
    backgroundColor: "blue",
    color: "white",
    "&:disabled": {
      backgroundColor: "blue",
      color: "white",
    },
    "&:hover": {
      backgroundColor: "#3A43F6",
      color: "white",
    },
  },
  form: { padding: "20px" },
});
