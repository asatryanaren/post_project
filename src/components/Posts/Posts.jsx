import { useDispatch, useSelector } from "react-redux";
import {
  getPostClickId,
  selectCurrentPage,
  selectPostsState,
} from "../../features/postsSlice";
import { NavLink } from "react-router-dom";
import WritePost from "./Writepost";
import { Container, Grid, Typography } from "@material-ui/core";
import { postsStyle } from "./styles/postsStyle";
import Pagination from "../Pagination/Pagination";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsState);
  const selectId = (id) => dispatch(getPostClickId(id));
  const styles = postsStyle();
  const currentPage = useSelector(selectCurrentPage);
  const postsPerPage = 10;
  const lastPostsIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostsIndex - postsPerPage;
  const currentPosts = posts.slice(firstPostsIndex, lastPostsIndex);

  return (
    <Container>
      <Grid container className={styles.flexContainer}>
        <Typography variant="h4">
          There are {posts.length} post in the database
        </Typography>
        <WritePost />
      </Grid>
      <Typography variant="h6">Posts title</Typography>
      <hr />
      {currentPosts.map((post) => {
        return (
          <Grid key={post.id}>
            <NavLink to={`/post/id:${post.id}`} className={styles.postsTitle}>
              <Typography variant="h6" onClick={() => selectId(post.id)}>
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
