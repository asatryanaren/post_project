import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const postsAPI = createAsyncThunk(
  "posts",
  async (post, { dispatch }) => {
    const response = await axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
      .then((resp) => resp.data);
    dispatch(getPostState());
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
export const postUpdate = createAsyncThunk(
  "post/update",
  async (post, { dispatch }) => {
    const newPost = { userId: 1, title: post.title, body: post.body };
    const response = await axios
      .patch(`https://jsonplaceholder.typicode.com/posts`, { newPost })
      .then((resp) => console.log(resp));
    dispatch(updatePost(newPost));
    return response;
  }
);

const initialState = {
  showNewBlockPostState: false,
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
    getPostState: (state, action) => {
      state.postsState = action.payload;
    },
    getPostClickId: (state, action) => {
      state.postId = action.payload;
    },
    getInitialpostState: (state, action) => {
      state.initialPost = action.payload;
    },
    updatePost: (state, action) => {
      const index = state.postsState.indexOf(state.postId);

      state.postsState = state.postsState.map((post, i) =>
        post[i] === index ? (post[i] = action.payload) : post
      );
    },
    deletePost: (state) => {
      state.postsState = state.postsState.filter((p) => p.id !== state.postId);
    },
    addPost: (state, action) => {
      state.postsState = [action.payload, ...state.postsState];
    },
  },
  extraReducers: {
    [postsAPI.pending]: (state) => {},
    [postsAPI.fulfilled]: (state, action) => {
      state.postsState = action.payload;
    },
    [postsAPI.pending]: (state) => {},
  },
});
export const selectShowNewBlockState = (state) =>
  state.postsSlice.showNewBlockPostState;
export const selectPostsState = (state) => state.postsSlice.postsState;
export const selectPostsId = (state) => state.postsSlice.postId;
export const {
  showNewBLockPost,
  getPostState,
  getPostClickId,
  updatePost,
  deletePost,
  addPost,
  getInitialpostState,
} = postsSlice.actions;

export default postsSlice.reducer;
