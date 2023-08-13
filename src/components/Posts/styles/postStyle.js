import { makeStyles } from "@material-ui/core";

export const postStyles = makeStyles({
  btn: {
    backgroundColor: "blue",
    color: "white",
    display: "inline-block",
    marginRight: "10px",
    "&:hover": {
      backgroundColor: "#3A43F6",
      color: "white",
    },
  },
  paper: {
    width: "80%",
    margin: " 50px auto",
    padding: "20px",
  },
  postBody: { margin: "20px 0" },
});
