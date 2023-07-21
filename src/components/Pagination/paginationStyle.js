import { makeStyles } from "@material-ui/core";

export const paginationStyle = makeStyles({
  link: {
    textDecoration: "none",
    fontSize: 20,
    border: "1px solid",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "35px",
    boxSizing: "border-box",
    margin: "0 3px",
    "&:hover": {
      backgroundColor: "#3A43F6",
      color: "white",
    },
  },
  active_link: {
    textDecoration: "none",
    fontSize: 20,
    border: "1px solid",
    borderRadius: "3px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "40px",
    height: "35px",
    boxSizing: "border-box",
    margin: "0 3px",
    backgroundColor: "#3A43F6",
    color: "white",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
});
