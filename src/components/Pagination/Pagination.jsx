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
      {pageNumbers.map((number) => (
        <NavLink
          to={`/posts/page/${number}`}
          key={number}
          className={({ isActive }) =>
            isActive ? style.active_link : style.link
          }
          onClick={() => {
            dispatch(updateCurrentPage(number));
            localStorage.setItem("currentPage", JSON.stringify(number));
          }}
        >
          {number}
        </NavLink>
      ))}
    </Container>
  );
};
export default Pagination;
