import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postUpdate,
  selectPostsId,
  selectPostsState,
} from "../../features/postsSlice";
import { NavLink } from "react-router-dom";

const UpdatePostForm = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const id = useSelector(selectPostsId);
  const posts = useSelector(selectPostsState);
  const post_id = posts.find((p) => p.id === id);
  // console.log(posts);
  const dispatch = useDispatch();
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        value={title}
        type="text"
        placeholder="New Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        value={body}
        type="text"
        placeholder="New Body"
        onChange={(e) => setBody(e.target.value)}
      />
      <NavLink to="/posts">
        <input
          type="submit"
          value="Update"
          onClick={() => dispatch(postUpdate({ title, body }))}
        />
      </NavLink>
    </form>
  );
};
export default UpdatePostForm;
