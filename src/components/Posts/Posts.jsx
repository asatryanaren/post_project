import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePostState,
  postsAPI,
  selectCurrentPage,
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
  const styles = postsStyle();
  const currentPage = useSelector(selectCurrentPage);
  const postsPerPage = 10;
  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostsIndex, lastPostsIndex);

  let [searchParams] = useSearchParams();
  const page = searchParams.get("page");
  useEffect(() => {
    if (posts.length === 0) {
      dispatch(postsAPI());
    }
  }, [dispatch]);

  return (
    <Container>
      <Grid container className={styles.flexContainer}>
        <Typography variant="h4">
          There are {posts.length} post in the database
        </Typography>
        <NavLink to="/addpost" className={styles.link}>
          <Button variant="contained" className={styles.btn}>
            Add post
          </Button>
        </NavLink>
      </Grid>
      <Typography variant="h6">Posts title</Typography>
      <hr />
      {currentPosts.map((post) => {
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
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} />
    </Container>
  );
};
export default Posts;
