import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateCurrentPage } from "../../features/postsSlice";
import { paginationStyle } from "./paginationStyle";
import { Container } from "@material-ui/core";

const Pagination = ({ postsPerPage, totalPosts }) => {
  const dispatch = useDispatch();
  const style = paginationStyle();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <Container className={style.container}>
      {pageNumbers.map((number, i) => (
        <NavLink
          to={`/posts/page/${i + 1}`}
          key={number}
          className={style.link}
          onClick={() => dispatch(updateCurrentPage(number))}
        >
          {number}
        </NavLink>
      ))}
    </Container>
  );
};
export default Pagination;
