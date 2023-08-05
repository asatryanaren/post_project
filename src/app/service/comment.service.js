import { createAsyncThunk } from "@reduxjs/toolkit";
import { addComment, deleteComment } from "../../features/postsSlice";
import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

const commentAdd = createAsyncThunk(
  "comment/add",
  async (comment, { dispatch }) => {
    await axios.post(`${BASE_URL}/comments`, { comment });
    dispatch(addComment(comment));
  }
);

const commentDelete = createAsyncThunk(
  "comment/deleteComment",
  async (id, { dispatch }) => {
    await axios.delete(`${BASE_URL}/comments/${id}`);
    dispatch(deleteComment(id));
  }
);

export { commentAdd, commentDelete };
