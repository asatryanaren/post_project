import { useDispatch, useSelector } from "react-redux";
import { getPostClickId, selectPostsState } from "../../features/postsSlice";
import { NavLink } from "react-router-dom";
import WritePost from "./Writepost";
import { Container, Grid, Typography } from "@material-ui/core";
import { flexContainer, postsTitle } from "./styles/postsStyle";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsState);
  const selectId = (id) => dispatch(getPostClickId(id));

  return (
    <Container>
      <Grid container style={flexContainer}>
        <Typography variant="h4">
          There are {posts.length} post in the database
        </Typography>
        <WritePost />
      </Grid>
      <Typography variant="h6">Posts title</Typography>
      <hr />
      {posts.map((post) => {
        return (
          <Grid key={post.id}>
            <NavLink to="/post" style={postsTitle}>
              <Typography variant="h6" onClick={() => selectId(post.id)}>
                {post.title}
              </Typography>
            </NavLink>
          </Grid>
        );
      })}
    </Container>
  );
};
export default Posts;
