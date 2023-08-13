import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCommentsState } from "../../features/postsSlice";
import { commentAdd, commentDelete } from "../../app/service/comment.service";
import { useParams } from "react-router-dom";
import { timeConverter } from "../../app/Healpers/healpers";
import {
  TextField,
  Typography,
  Button,
  Grid,
  Container,
} from "@material-ui/core";
import { addCommentsStyle } from "./styles/addCommentsStyle";

const AddComments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comment = useSelector(selectCommentsState);
  const [commentBody, setCommentBody] = useState("");
  const name = localStorage.getItem("name");
  const [comments, setComments] = useState();
  const style = addCommentsStyle();

  const addComment = () => {
    if (commentBody.length !== 0) {
      dispatch(
        commentAdd({
          name,
          comment: commentBody,
          time: timeConverter(),
          commentsId: id,
          id: Math.random(),
        })
      );
      setCommentBody("");
    }
  };

  useEffect(() => {
    let com = localStorage.getItem("comments");
    com = JSON.parse(com);
    setComments(com);
  }, [comment]);
  const Delete = (id) => dispatch(commentDelete(id));
  return (
    <Container>
      <form onSubmit={(e) => e.preventDefault()}>
        <Typography>Add comment</Typography>
        <TextField
          type="text"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
          className={style.textField}
        />

        <Button
          type="submit"
          onClick={() => addComment()}
          className={style.btn_add}
        >
          Add comment
        </Button>
        {comments?.map((item) => {
          if (item.commentsId === id) {
            return (
              <Grid key={item.id}>
                <Typography className={style.time}>{item.time}</Typography>
                <Typography className={style.name}>{item.name}</Typography>
                <Typography>{item.comment}</Typography>
                <Button
                  onClick={() => Delete(item.id)}
                  className={style.btn_delete}
                >
                  Delete Comment
                </Button>
              </Grid>
            );
          }
        })}
      </form>
    </Container>
  );
};
export default AddComments;
