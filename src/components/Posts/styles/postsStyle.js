import { makeStyles } from "@material-ui/core";

export const postsStyle = makeStyles({
  postsTitle: { textDecoration: "none", display: "inline-block" },
  flexContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "30px",
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    display: "block",
    margin: "0px 5px",
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
  btn_container: { display: "flex" },
});
