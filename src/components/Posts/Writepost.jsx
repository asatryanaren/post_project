import { useDispatch, useSelector } from "react-redux";
import {
  postAdd,
  selectPostsState,
  selectShowNewBlockState,
  showNewBLockPost,
} from "../../features/postsSlice";
import { useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@material-ui/core";
import { writePostStyle } from "./styles/writepostStyle";

const WritePost = () => {
  const stateForm = useSelector(selectShowNewBlockState);
  const dispatch = useDispatch();
  const showForm = () => dispatch(showNewBLockPost(true));
  window.addEventListener("click", () => dispatch(showNewBLockPost(false)));
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const posts = useSelector(selectPostsState);
  const style = writePostStyle();

  const postAd = () => {
    dispatch(
      postAdd({
        title: newPostTitle,
        body: newPostBody,
        userId: posts.length,
        id: Math.random(),
      })
    );
    setNewPostTitle("");
    setNewPostBody("");
    dispatch(showNewBLockPost(false));
  };

  return (
    <Grid className={style.container} onClick={(e) => e.stopPropagation()}>
      <Button variant="contained" onClick={showForm} className={style.btn}>
        Add post
      </Button>
      {stateForm && (
        <Paper className={style.paper}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Typography>Write Title Post</Typography>
            <TextField
              type="text"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              fullWidth
            />
            <Typography>Write Post</Typography>
            <TextField
              type="text"
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
              fullWidth
            />
            <Button
              onClick={postAd}
              className={style.btn}
              disabled={
                (newPostTitle.length || newPostBody.length) <= 0 && true
              }
            >
              Add
            </Button>
          </form>
        </Paper>
      )}
    </Grid>
  );
};
export default WritePost;
