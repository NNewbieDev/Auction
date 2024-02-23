import axios from "axios";
import cookie from "react-cookies";

// const SERVER_CONTEXT = "/SaleAppV1";
const SERVER_CONTEXT = "/DauGiaApp";
const SERVER = "http://localhost:8080";

export const endpoints = {
  posts: `${SERVER_CONTEXT}/api/posts/`,
  live: `${SERVER_CONTEXT}/api/posts/live/`,
  createPost: `${SERVER_CONTEXT}/api/posts/create/`,
  products: `${SERVER_CONTEXT}/api/products/`,
  comment: `${SERVER_CONTEXT}/api/products/comments/`,
  cate: `${SERVER_CONTEXT}/api/products/category/`,
  details: (id) => `${SERVER_CONTEXT}/api/products/?postId=${id}`,
  register: `${SERVER_CONTEXT}/api/users/`,
  login: `${SERVER_CONTEXT}/api/login/`,
  "current-user": `${SERVER_CONTEXT}/api/current-user/`,
};

export const authApi = () => {
  return axios.create({
    baseURL: SERVER,
    headers: {
      Authorization: cookie.load("token"),
    },
  });
};

export default axios.create({
  baseURL: SERVER,
});
