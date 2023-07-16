import { makeStyles } from "@material-ui/core";

export const postsStyle = makeStyles({
  postsTitle: { textDecoration: "none", display: "inline-block" },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
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
  link: { textDecoration: "none" },
});
