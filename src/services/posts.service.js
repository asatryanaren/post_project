import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

async function getPostsByUserId(userId) {
  const response = await axios.get(`${BASE_URL}/posts?userId=${userId}`);
  return response.data;
}

async function getPostById(postId) {
  const response = await axios.get(`${BASE_URL}/posts/${postId}`);
  return response.data;
}

async function createPost(post) {
  const response = await axios.post(`${BASE_URL}/posts`, { post });
  return response.data;
}

async function deletePost(postId) {
  const response = await axios.delete(`${BASE_URL}/posts/${postId}`);
  return response.data;
}

export { getPostsByUserId, getPostById, createPost, deletePost };
