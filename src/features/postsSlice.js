import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const postsAPI = createAsyncThunk(
  "posts",
  async (post, { dispatch }) => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((resp) => resp.data);
    dispatch(getPostState(response));
    return response;
  }
);
export const postAdd = createAsyncThunk(
  "post/add",
  async (post, { dispatch }) => {
    const response = await axios.post(
      `https://jsonplaceholder.typicode.com/posts`,
      { post }
    );
    dispatch(addPost(post));
    return response;
  }
);
export const postDelete = createAsyncThunk(
  "posts/deletePost",
  async (id, { dispatch }) => {
    const response = await axios.delete(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
    dispatch(deletePost(id));
    return response;
  }
);

const initialState = {
  showNewBlockPostState: false,
  showUpdateBlockstate: false,
  postsState: [],
  postId: null,
  initialPost: {},
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
  },
});
export const selectShowNewBlockState = (state) =>
  state.postsSlice.showNewBlockPostState;
export const selectShowUpdateBlockstate = (state) =>
  state.postsSlice.showUpdateBlockstate;
export const selectPostsState = (state) => state.postsSlice.postsState;
export const selectPostsId = (state) => state.postsSlice.postId;
export const {
  showNewBLockPost,
  showUpdateBlock,
  getPostState,
  getPostClickId,
  updatePost,
  deletePost,
  addPost,
} = postsSlice.actions;

export default postsSlice.reducer;
