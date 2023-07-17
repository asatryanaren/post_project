import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postsAPI = createAsyncThunk(
  "posts",
  async (post, { dispatch }) => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((resp) => resp.data);
    dispatch(getPostState(response));
  }
);
export const postAPI = createAsyncThunk("posts", async (id, { dispatch }) => {
  const response = await axios
    .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((resp) => resp.data);
  dispatch(getSinglePostState(response));
});
export const postAdd = createAsyncThunk(
  "post/add",
  async (post, { dispatch }) => {
    await axios.post(`https://jsonplaceholder.typicode.com/posts`, { post });
    dispatch(addPost(post));
  }
);
export const postDelete = createAsyncThunk(
  "posts/deletePost",
  async (id, { dispatch }) => {
    console.log("slice id ", id);
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id));
  }
);

const initialState = {
  postsState: [],
  currentPage: 1,
  singlePost: null,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostState: (state, action) => {
      state.postsState = action.payload;
    },
    getSinglePostState: (state, action) => {
      state.singlePost = action.payload;
    },
    updatePost: (state, action) => {
      const { title, body, id } = action.payload;
      const p = state.postsState.find((post) => post.id === +id);
      if (p) {
        p.title = title;
        p.body = body;
      }
    },
    deletePost: (state) => {
      state.postsState = state.postsState.filter(
        (p) => p.id !== state.singlePost.id
      );
    },
    addPost: (state, action) => {
      console.log(action.payload);
      state.postsState = [action.payload, ...state.postsState];
    },
    updateCurrentPage: (state, action) => {
      console.log(action.payload);
      state.currentPage = action.payload;
    },
  },
});
export const selectPostsState = (state) => state.postsSlice.postsState;
export const selectCurrentPage = (state) => state.postsSlice.currentPage;
export const selectSinglePost = (state) => state.postsSlice.singlePost;
export const {
  getPostState,
  updatePost,
  deletePost,
  addPost,
  updateCurrentPage,
  getSinglePostState,
} = postsSlice.actions;

export default postsSlice.reducer;
