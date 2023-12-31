import { useNavigate } from "react-router-dom";
import { Button, Container, Typography } from "@material-ui/core";
import { notFoundStyle } from "./notFoundStyle";

const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const style = notFoundStyle();
  return (
    <Container className={style.container}>
      <Typography variant="body1">Sorry, page not found!</Typography>
      <Typography>
        Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
        mistyped the URL? Be sure to check your spelling.
      </Typography>
      <img src="./images/404.svg" alt="404 Error" />
      <Button onClick={goBack} className={style.btn}>
        Go Back
      </Button>
    </Container>
  );
};
export default NotFound;
