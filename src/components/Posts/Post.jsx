import { useDispatch, useSelector } from "react-redux";
import {
  postAPI,
  selectSinglePost,
  deletePost,
  selectCurrentPage,
} from "../../features/postsSlice";
import { NavLink, useParams } from "react-router-dom";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import { postStyles } from "./styles/postStyle";
import { useEffect } from "react";

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const page = useSelector(selectCurrentPage);
  const Delete = (id) => {
    dispatch(deletePost(id));
    localStorage.removeItem("post");
  };
  const style = postStyles();
  const userId = localStorage.getItem("userId");
  const singlePost = useSelector(selectSinglePost);
  useEffect(() => {
    if (id) dispatch(postAPI(id));
  }, [id, dispatch]);
  localStorage.setItem("post", JSON.stringify(singlePost));
  return (
    <Paper className={style.paper}>
      {singlePost && (
        <Container>
          <Typography variant="h4">{singlePost.title}</Typography>
          <Typography variant="body1" className={style.postBody}>
            {singlePost.body}
          </Typography>
          {(singlePost.userId == userId || singlePost.id < 1) && (
            <div>
              <NavLink to={`/post/${id}/updatepost`}>
                <Button variant="contained" className={style.btn}>
                  Edit
                </Button>
              </NavLink>
              <NavLink to={`/posts/page/${page} `}>
                <Button
                  onClick={() => Delete(singlePost.id)}
                  variant="contained"
                  className={style.btn}
                >
                  Delete
                </Button>
              </NavLink>
            </div>
          )}
        </Container>
      )}
    </Paper>
  );
};
export default Post;
