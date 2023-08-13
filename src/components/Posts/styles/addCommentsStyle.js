import { makeStyles } from "@material-ui/core";

export const addCommentsStyle = makeStyles({
  btn_add: {
    backgroundColor: "blue",
    color: "white",
    display: "inline-block",
    marginLeft: "20px",

    "&:hover": {
      backgroundColor: "#3A43F6",
      color: "white",
    },
  },
  btn_delete: {
    backgroundColor: "blue",
    color: "white",
    display: "inline-block",
    marginTop: "10px",
    "&:hover": {
      backgroundColor: "#3A43F6",
      color: "white",
    },
  },
  textField: { width: "250px" },
  time: { marginLeft: "100px", marginTop: "10px" },
  name: { margin: "7px 0" },
});
