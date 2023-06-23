import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  selectPostsState,
  selectShowNewBlockState,
  showNewBLockPost,
} from "../../features/postsSlice";
import { useState } from "react";

const WritePost = () => {
  const stateForm = useSelector(selectShowNewBlockState);
  const dispatch = useDispatch();
  const showForm = () => dispatch(showNewBLockPost(true));
  document.addEventListener("click", () => dispatch(showNewBLockPost(false)));
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostBody, setNewPostBody] = useState("");
  const posts = useSelector(selectPostsState);

  const postAdd = () => {
    dispatch(
      addPost({
        title: newPostTitle,
        body: newPostBody,
        userId: posts.length,
        id: Math.random(),
      })
    );
  };

  return (
    <div onClick={(e) => e.stopPropagation()}>
      <button onClick={showForm}>Add post</button>
      {stateForm && (
        <form onSubmit={(e) => e.preventDefault()}>
          <label>
            Write Title Post
            <input
              type="text"
              value={newPostTitle}
              onChange={(e) => setNewPostTitle(e.target.value)}
            />
          </label>
          <label>
            Write Post
            <input
              type="text"
              value={newPostBody}
              onChange={(e) => setNewPostBody(e.target.value)}
            />
          </label>
          <input type="submit" value="Add" onClick={postAdd} />
        </form>
      )}
    </div>
  );
};
export default WritePost;
