import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSinglePost, updatePost } from "../../features/postsSlice";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Typography } from "@material-ui/core";
import { updatePostStyle } from "./styles/updatePost";

const UpdatePost = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-2);
  const post = useSelector(selectSinglePost);
  let localPost = localStorage.getItem("post");
  localPost = JSON.parse(localPost);
  const [title, setTitle] = useState(localPost.title);
  const [body, setBody] = useState(localPost.body);
  const update = () => {
    dispatch(updatePost({ title, body, id }));
    localStorage.removeItem("post");
    goBack();
  };
  const style = updatePostStyle();
  // obnavitic heto vor noric es uzum obnovit anes amena skzbi dzevova berum eli post@ et nranica vor es localum em obnavit anum vochte bazayum

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
      <Button
        fullWidth
        variant="contained"
        className={style.btn}
        onClick={update}
        disabled={(title.length && body.length) == "" && true}
      >
        Update
      </Button>
    </form>
  );
};
export default UpdatePost;
