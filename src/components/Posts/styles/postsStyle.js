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
  form: { display: "flex" },
  search: {
    width: "90%",
  },
  search_btn: {
    backgroundColor: "blue",
    color: "white",
    display: "block",
    width: "115px",
    margin: "5px 0px",
    marginLeft: "10px",
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
