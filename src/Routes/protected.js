import Posts from "../components/Posts/Posts";
import Post from "../components/Posts/Post";
import UpdatePost from "../components/Posts/UpdatePost";
import AddPost from "../components/Posts/AddPost";

export const PROTECTED_ROUTES = [
  {
    path: "/posts/page/:id",
    component: <Posts />,
  },
  {
    path: "/post/:id",
    component: <Post />,
  },
  { path: "/post/:id/updatepost", component: <UpdatePost /> },
  { path: "/addpost", component: <AddPost /> },
];
