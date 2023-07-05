import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectPostsId, updatePost } from "../../features/postsSlice";
import { NavLink } from "react-router-dom";
import {
  Button,
  Dialog,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { updatePostStyle } from "./styles/updatePost";

const UpdatePostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const id = useSelector(selectPostsId);
  const dispatch = useDispatch();
  const update = () => dispatch(updatePost({ title, body, id }));
  const style = updatePostStyle();

  return (
    <Paper className={style.container}>
      <Dialog open={true}>
        <form
          onSubmit={(e) => e.preventDefault()}
          onClick={(e) => e.stopPropagation()}
          className={style.form}
        >
          <Typography variant="h5">Update your post here</Typography>
          <TextField
            value={title}
            label="New Title"
            fullWidth
            className={style.textField}
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            value={body}
            label="New Post"
            fullWidth
            className={style.textField}
            required
            type="text"
            onChange={(e) => setBody(e.target.value)}
          />
          <NavLink to="/posts">
            <Button
              fullWidth
              variant="contained"
              className={style.btn}
              onClick={update}
              disabled={(title.length || body.length) <= 0 && true}
            >
              Update
            </Button>
          </NavLink>
        </form>
      </Dialog>
    </Paper>
  );
};
export default UpdatePostForm;
