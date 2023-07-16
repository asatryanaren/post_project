import { useDispatch, useSelector } from "react-redux";
import {
  postAPI,
  selectSinglePost,
  deletePost,
} from "../../features/postsSlice";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Button, Container, Paper, Typography } from "@material-ui/core";
import { postStyles } from "./styles/postStyle";
import { useEffect } from "react";

const Post = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  const Delete = (id) => {
    dispatch(deletePost(id));
    goBack();
  };
  const style = postStyles();
  const userId = localStorage.getItem("userId");
  const singlePost = useSelector(selectSinglePost);
  useEffect(() => {
    if (id) dispatch(postAPI(id));
  }, [id, dispatch]);

  return (
    <Paper className={style.paper}>
      {singlePost && (
        <Container>
          <Typography variant="h4">{singlePost.title}</Typography>
          <Typography variant="body1" className={style.postBody}>
            {singlePost.body}
          </Typography>
          {singlePost.userId == userId && (
            <div>
              <NavLink to={`/post/${id}/updatepost`}>
                <Button variant="contained" className={style.btn}>
                  Edit
                </Button>
              </NavLink>
              <Button
                onClick={() => Delete(singlePost.id)}
                variant="contained"
                className={style.btn}
              >
                Delete
              </Button>
            </div>
          )}
        </Container>
      )}
    </Paper>
  );
};
export default Post;
