import { useDispatch, useSelector } from "react-redux";
import {
  selectPostsState,
  selectPostsId,
  postDelete,
  showUpdateBlock,
  selectShowUpdateBlockstate,
} from "../../features/postsSlice";
import { selectEmailUser, selectUsersData } from "../../features/usersSlice";
import { NavLink } from "react-router-dom";
import UpdatePostForm from "./UpdatePost";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import { postStyles } from "./styles/postStyle";

const Post = () => {
  const showUpdateForm = useSelector(selectShowUpdateBlockstate);
  const selectPost = useSelector(selectPostsState);
  const selectPostId = useSelector(selectPostsId);
  const email = useSelector(selectEmailUser);
  const data = useSelector(selectUsersData);
  const dispatch = useDispatch();
  const Delete = (id) => dispatch(postDelete(id));
  const showBlock = (e) => {
    e.stopPropagation();
    dispatch(showUpdateBlock(true));
  };
  window.addEventListener("click", () => dispatch(showUpdateBlock(false)));
  const style = postStyles();

  return (
    <Paper className={style.paper}>
      {selectPost.map((p) => {
        if (p.id === selectPostId) {
          return (
            <Container container key={p.id}>
              <Typography variant="h4">{p.title}</Typography>
              <Typography variant="body1" className={style.postBody}>
                {p.body}
              </Typography>
              {data.find(
                (el) => (el.email === email && el.id === p.userId) || p.id < 1
              ) && (
                <div>
                  <Button
                    onClick={(e) => showBlock(e)}
                    variant="contained"
                    className={style.btn}
                  >
                    Edit
                  </Button>
                  <NavLink to="/posts">
                    <Button
                      onClick={() => Delete(p.id)}
                      variant="contained"
                      className={style.btn}
                    >
                      Delete
                    </Button>
                  </NavLink>
                </div>
              )}
            </Container>
          );
        }
      })}
      {showUpdateForm && <UpdatePostForm />}
    </Paper>
  );
};
export default Post;
