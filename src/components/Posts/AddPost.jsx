import { useDispatch } from "react-redux";
import { postAdd } from "../../features/postsSlice";
import { useState } from "react";
import { Button, Paper, TextField } from "@material-ui/core";
import { addPostStyle } from "./styles/addPostStyle";
import { NavLink } from "react-router-dom";

const AddPost = () => {
  const dispatch = useDispatch();
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const style = addPostStyle();

  const postAd = () => {
    dispatch(
      postAdd({
        title: newPostTitle,
        body: newPostBody,
        id: Math.random(),
      })
    );
    setNewPostTitle("");
    setNewPostBody("");
  };

  return (
    <>
      {
        <Paper className={style.paper}>
          <form onSubmit={(e) => e.preventDefault()}>
            <TextField
              type="text"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
              fullWidth
              label="Write Title Post"
              className={style.textField}
            />
            <TextField
              type="text"
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
              fullWidth
              label="Write Post"
              className={style.textField}
            />
            <NavLink to="/posts/page/1" className={style.link}>
              <Button
                onClick={postAd}
                className={style.btn}
                disabled={
                  (newPostTitle.length || newPostBody.length) <= 0 && true
                }
              >
                Add
              </Button>
            </NavLink>
          </form>
        </Paper>
      }
    </>
  );
};
export default AddPost;
