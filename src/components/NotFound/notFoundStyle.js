import { makeStyles } from "@material-ui/core";

export const notFoundStyle = makeStyles({
  img: {
    margin: "40px 0",
    maxWidth: "50%",
  },
  container: {
    width: "500px",
    position: "absolute",
    top: "50%",
    left: " 50%",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "transparent",
    padding: "0 30px",
    minWidth: "60%",
  },
  btn: {
    backgroundColor: "blue",
    color: "white",
    display: "block",
    margin: "0 auto",
    marginTop: "30px",
    width: "120px",
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
