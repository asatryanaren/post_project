import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  createPost,
  deletePost as deletePostApi,
  getPostById,
  getPostsByUserId,
} from "../services/posts.service";

export const postsAPI = createAsyncThunk(
  "posts",
  async (userId, { dispatch }) => {
    const response = await getPostsByUserId(userId);
    dispatch(getPostState(response));
  }
);
export const postsLength = createAsyncThunk(
  "posts",
  async (post, { dispatch }) => {
    const response = await axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((resp) => resp.data);
    dispatch(getBasePostsLength(response.length));
  }
);

export const postAPI = createAsyncThunk("posts", async (id, { dispatch }) => {
  const response = await getPostById(id);
  dispatch(getSinglePostState(response));
});
export const postAdd = createAsyncThunk(
  "post/add",
  async (post, { dispatch }) => {
    await createPost(post);
    dispatch(addPost(post));
  }
);
export const postDelete = createAsyncThunk(
  "posts/deletePost",
  async (id, { dispatch }) => {
    await deletePostApi(id);
    dispatch(deletePost(id));
  }
);

const initialState = {
  postsState: [],
  currentPage: 1,
  singlePost: null,
  basePostsLength: null,
  comments: [],
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
      state.basePostsLength = state.basePostsLength - 1;
    },
    addPost: (state, action) => {
      state.postsState = [action.payload, ...state.postsState];
      state.basePostsLength = state.basePostsLength + 1;
    },
    updateCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    getBasePostsLength: (state, action) => {
      state.basePostsLength = action.payload;
    },
    addComment: (state, action) => {
      const comment = action.payload;
      localStorage.setItem(
        "comments",
        JSON.stringify([...state.comments, comment])
      );
      state.comments = [...state.comments, comment];
    },
    deleteComment: (state, action) => {
      const comments = state.comments.filter(
        (comment) => comment.id !== action.payload
      );
      localStorage.setItem("comments", JSON.stringify(comments));
      state.comments = comments;
    },
  },
});
export const selectPostsState = (state) => state.postsSlice.postsState;
export const selectCurrentPage = (state) => state.postsSlice.currentPage;
export const selectSinglePost = (state) => state.postsSlice.singlePost;
export const selectBasePostsLength = (state) =>
  state.postsSlice.basePostsLength;
export const selectCommentsState = (state) => state.postsSlice.comments;
export const {
  getPostState,
  updatePost,
  deletePost,
  addPost,
  updateCurrentPage,
  getSinglePostState,
  getBasePostsLength,
  deleteComment,
  addComment,
} = postsSlice.actions;

export default postsSlice.reducer;
