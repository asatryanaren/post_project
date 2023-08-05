import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCommentsState } from "../../features/postsSlice";
import { commentAdd, commentDelete } from "../../app/service/comment.service";
import { useParams } from "react-router-dom";
import { timeConverter } from "../Healpers/time";

const AddComments = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const comment = useSelector(selectCommentsState);
  const [commentBody, setCommentBody] = useState("");
  const name = localStorage.getItem("name");

  const timeConverter = () => {
    let a = new Date();
    let hour = a.getHours();
    let min = a.getMinutes();
    let time = ` ${hour} : ${min}  `;
    return time;
  };
  const addComment = () => {
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
  };
  let comments = localStorage.getItem("comments");
  comments = JSON.parse(comments);
  useEffect(() => {}, [comment]);

  const Delete = (id) => dispatch(commentDelete(id));
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>
        Add comment
        <input
          type="text"
          value={commentBody}
          onChange={(e) => setCommentBody(e.target.value)}
        />
      </label>
      <input type="submit" value="Add comment" onClick={() => addComment()} />
      {comments?.map((item) => {
        if (item.commentsId === id) {
          return (
            <div key={item.id}>
              <p>{item.time}</p>
              <p>{item.name}</p>
              <p>{item.comment}</p>
              <button onClick={() => Delete(item.id)}>Delete Comment</button>
            </div>
          );
        }
      })}
    </form>
  );
};
export default AddComments;