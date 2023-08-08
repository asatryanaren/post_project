import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePostState,
  selectBasePostsLength,
  selectCurrentPage,
  selectPostsState,
} from "../../features/postsSlice";
import { NavLink, useSearchParams } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { postsStyle } from "./styles/postsStyle";
import Pagination from "../Pagination/Pagination";
import { useEffect } from "react";
import { postsAPI } from "../../app/service/posts.service";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsState);
  const Length = useSelector(selectBasePostsLength);
  const styles = postsStyle();
  const postsPerPage = 10;
  let [searchParams, setSearchParams] = useSearchParams();
  const currentPage = useSelector(selectCurrentPage);
  const page = searchParams.get("page");
  const logOut = () => localStorage.clear();

  useEffect(() => {
    dispatch(postsAPI(page));
    setSearchParams({ page: page ?? currentPage });
  }, [dispatch, page]);

  return (
    <Container>
      <Grid container className={styles.flexContainer}>
        <Typography variant="h4">
          There are {Length} post in the database
        </Typography>
        <Grid className={styles.btn_container}>
          <NavLink to="/addpost" className={styles.link}>
            <Button variant="contained" className={styles.btn}>
              Add post
            </Button>
          </NavLink>
          <NavLink to="/" className={styles.link}>
            <Button onClick={logOut} variant="contained" className={styles.btn}>
              Log Out
            </Button>
          </NavLink>
        </Grid>
      </Grid>
      <Typography variant="h6">Posts title</Typography>
      <hr />
      {posts.map((post) => {
        return (
          <Grid key={post.id}>
            <NavLink to={`/post/${post.id}`} className={styles.postsTitle}>
              <Typography
                variant="h6"
                onClick={() => dispatch(getSinglePostState(post))}
              >
                {post.title}
              </Typography>
            </NavLink>
          </Grid>
        );
      })}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={Length}
        searchParams={searchParams}
      />
    </Container>
  );
};
export default Posts;
