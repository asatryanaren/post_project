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
    await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    dispatch(deletePost(id));
  }
);

const initialState = {
  showNewBlockPostState: false,
  showUpdateBlockstate: false,
  postsState: [],
  postId: null,
  currentPage: 1,
};
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    showNewBLockPost: (state, action) => {
      state.showNewBlockPostState = action.payload;
    },
    showUpdateBlock: (state, action) => {
      state.showUpdateBlockstate = action.payload;
    },
    getPostState: (state, action) => {
      state.postsState = action.payload;
    },
    getPostClickId: (state, action) => {
      state.postId = action.payload;
    },
    updatePost: (state, action) => {
      const { id, title, body } = action.payload;
      const pi = state.postsState.find((post) => post.id === id);
      if (pi) pi.title = title;
      pi.body = body;
    },
    deletePost: (state) => {
      state.postsState = state.postsState.filter((p) => p.id !== state.postId);
    },
    addPost: (state, action) => {
      state.postsState = [action.payload, ...state.postsState];
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
});
export const selectShowNewBlockState = (state) =>
  state.postsSlice.showNewBlockPostState;
export const selectShowUpdateBlockstate = (state) =>
  state.postsSlice.showUpdateBlockstate;
export const selectPostsState = (state) => state.postsSlice.postsState;
export const selectPostsId = (state) => state.postsSlice.postId;
export const selectCurrentPage = (state) => state.postsSlice.currentPage;
export const {
  showNewBLockPost,
  showUpdateBlock,
  getPostState,
  getPostClickId,
  updatePost,
  deletePost,
  addPost,
  updateCurrentPage,
} = postsSlice.actions;

export default postsSlice.reducer;
