import axios from "axios";
import {
  addPost,
  deletePost,
  filterPosts,
  getBasePostsLength,
  getPostState,
  getSinglePostState,
} from "../../features/postsSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const postsAPI = createAsyncThunk("posts", async (post, { dispatch }) => {
  const response = await axios
    .get(`${BASE_URL}/posts?userId=${post}`)
    .then((resp) => resp.data);
  dispatch(getPostState(response));
  const resp = await axios.get(`${BASE_URL}/posts`).then((resp) => resp.data);
  dispatch(getBasePostsLength(resp.length));
});

const postAPI = createAsyncThunk("posts", async (id, { dispatch }) => {
  const response = await axios
    .get(`${BASE_URL}/posts/${id}`)
    .then((resp) => resp.data);
  dispatch(getSinglePostState(response));
});

const postsSearchAPI = createAsyncThunk(
  "posts",
  async (title, { dispatch }) => {
    const response = await axios
      .get(`${BASE_URL}/posts`)
      .then((resp) => resp.data);
    dispatch(getPostState(response));
    dispatch(filterPosts(title));
  }
);

const postAdd = createAsyncThunk("post/add", async (post, { dispatch }) => {
  await axios.post(`${BASE_URL}/posts`, { post });
  dispatch(addPost(post));
});

const postDelete = createAsyncThunk(
  "posts/deletePost",
  async (id, { dispatch }) => {
    await axios.delete(`${BASE_URL}/posts/${id}`);
    dispatch(deletePost(id));
  }
);

export { postsAPI, postAPI, postAdd, postDelete, postsSearchAPI };
