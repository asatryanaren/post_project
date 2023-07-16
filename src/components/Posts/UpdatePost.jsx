import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSinglePost, updatePost } from "../../features/postsSlice";
import { NavLink, useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@material-ui/core";
import { updatePostStyle } from "./styles/updatePost";

const UpdatePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const post = useSelector(selectSinglePost);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const update = () => dispatch(updatePost({ title, body, id }));
  const style = updatePostStyle();

  return (
    <form onSubmit={(e) => e.preventDefault()} className={style.form}>
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
  );
};
export default UpdatePost;
