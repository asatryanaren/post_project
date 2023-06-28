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
import {
  buttonStyle,
  containerstyle,
  textFieldStyle,
} from "./styles/updatePost";

const UpdatePostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const id = useSelector(selectPostsId);
  const dispatch = useDispatch();
  const update = () => dispatch(updatePost({ title, body, id }));

  return (
    <Paper style={containerstyle}>
      <Dialog open={true}>
        <form
          onSubmit={(e) => e.preventDefault()}
          onClick={(e) => e.stopPropagation()}
          style={{ padding: "20px" }}
        >
          <Typography variant="h5">Update your post here</Typography>
          <TextField
            value={title}
            label="New Title"
            fullWidth
            style={textFieldStyle}
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            value={body}
            label="New Post"
            fullWidth
            style={textFieldStyle}
            required
            type="text"
            onChange={(e) => setBody(e.target.value)}
          />
          <NavLink to="/posts">
            <Button
              fullWidth
              variant="contained"
              style={buttonStyle}
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
