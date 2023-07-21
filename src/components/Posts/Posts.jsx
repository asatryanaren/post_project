import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePostState,
  postsAPI,
  postsLength,
  selectBasePostsLength,
  selectPostsState,
} from "../../features/postsSlice";
import { NavLink, useSearchParams } from "react-router-dom";
import { Container, Grid, Typography, Button } from "@material-ui/core";
import { postsStyle } from "./styles/postsStyle";
import Pagination from "../Pagination/Pagination";
import { useEffect } from "react";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsState);
  const Length = useSelector(selectBasePostsLength);
  const styles = postsStyle();
  const postsPerPage = 10;
  let localCurrentPage = localStorage.getItem("currentPage");
  localCurrentPage = JSON.parse(localCurrentPage);
  let [searchParams] = useSearchParams();
  const page = searchParams.get("page");

  useEffect(() => {
    dispatch(postsAPI(localCurrentPage));
    dispatch(postsLength());
  }, [dispatch, localCurrentPage]);

  return (
    <Container>
      <Grid container className={styles.flexContainer}>
        <Typography variant="h4">
          There are {Length} post in the database
        </Typography>
        <NavLink to="/addpost" className={styles.link}>
          <Button variant="contained" className={styles.btn}>
            Add post
          </Button>
        </NavLink>
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
        currentPosts
      />
    </Container>
  );
};
export default Posts;
