import { Route, Routes } from "react-router-dom";
import FormPage from "./components/FormPage/FormPage";
import Posts from "./components/Posts/Posts";
import Post from "./components/Posts/Post";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { postsAPI } from "./features/postsSlice";

function App() {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(postsAPI());
  }, [disptach]);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
