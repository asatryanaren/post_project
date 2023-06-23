import { useDispatch, useSelector } from "react-redux";
import {
  selectPostsState,
  selectPostsId,
  deletePost,
} from "../../features/postsSlice";
import { selectEmailUser, selectUsersData } from "../../features/usersSlice";
import { NavLink } from "react-router-dom";
import UpdatePostForm from "./UpdatePost";
const Post = () => {
  const selectPost = useSelector(selectPostsState);
  const selectPostId = useSelector(selectPostsId);
  const email = useSelector(selectEmailUser);
  const data = useSelector(selectUsersData);
  const dispatch = useDispatch();

  const postDelete = () => dispatch(deletePost());
  return (
    <div>
      <UpdatePostForm />
      {selectPost.map((p) => {
        if (p.id === selectPostId) {
          return (
            <div key={p.id}>
              <h2>{p.title}</h2>
              <p>{p.body}</p>
              {data.find(
                (el) => (el.email === email && el.id === p.id) || p.id < 1
              ) && (
                <div>
                  <button>Edit</button>
                  <NavLink to="/posts">
                    <button onClick={postDelete}>Delete</button>
                  </NavLink>
                </div>
              )}
            </div>
          );
        }
      })}
    </div>
  );
};
export default Post;
