import { useDispatch, useSelector } from "react-redux";
import {
  getInitialpostState,
  getPostClickId,
  selectPostsState,
  updatePost,
} from "../../features/postsSlice";
import { NavLink } from "react-router-dom";
import WritePost from "./Writepost";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPostsState);

  return (
    <div>
      <h2>There are {posts.length} post in the database</h2>
      <div>
        <h3>Posts title</h3>
        <WritePost />
      </div>
      <hr />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <NavLink to="/post">
              <h4
                onClick={() => {
                  dispatch(getPostClickId(post.id));
                  return dispatch(getInitialpostState(post));
                }}
              >
                {post.title}
              </h4>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};
export default Posts;
