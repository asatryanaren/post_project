import { makeStyles } from "@material-ui/core";

export const updatePostStyle = makeStyles({
  form: {
    width: "400px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    backgroundColor: "#F3F6F9",
    boxSizing: "border-box",
    padding: "30px",
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
});
