import { Route, Routes, useParams } from "react-router-dom";
import FormPage from "./components/Login/Login";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postsAPI } from "./features/postsSlice";

function App() {
  const disptach = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    disptach(postsAPI());
  }, [disptach, id]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:page" element={<Posts />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
