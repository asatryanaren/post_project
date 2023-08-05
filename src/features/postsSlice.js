import { createSlice } from "@reduxjs/toolkit";

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
      let comments = localStorage.getItem("comments");
      comments = JSON.parse(comments).filter(
        (comment) => comment.id !== action.payload
      );
      console.log(comments);
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
