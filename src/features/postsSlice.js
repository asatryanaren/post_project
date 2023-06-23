import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";

export const postsAPI = createAsyncThunk("posts", async () => {
  const response = await axios
    .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
    .then((resp) => resp.data);
  return response;
});

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
      console.log(current(state.postsState));
      const title = action.payload.title;
      const body = action.payload.body;
      let index = state.postsState.indexOf(state.postId);
      state.postsState = state.postsState.map(
        (post, indx) =>
          post[indx] === index &&
          (post[indx] = { id: post.id, userId: post.userId, title, body })
      );
      // const title = action.payload.title;
      // const body = action.payload.body;
      // const postClone = [... state.initialPost];
      // const index = postClone.indexOf(state.postId);
      // postClone[index] = { id: Math.random(), title, body };
      // axios.put(
      //   "https://jsonplaceholder.typicode.com/posts" + "/" + state.initialPost
      // );
      // state.postsState = postClone;
      /////////////////
      // state.postsState = state.postsState.map((post) => {
      //   console.log(post);
      //   return post.id === state.postId
      //     ? { title, id: post.id, body, userId: post.userId }
      //     : { post };
      // });
      //////////////////
      // p.id === state.postId && {
      //   title: action.payload.title,
      //   body: action.payload.body,
      //   id: p.id,
      // }
      console.log(current(state.postsState));
      // console.log(state.postsState);
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
