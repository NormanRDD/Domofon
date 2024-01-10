import { instance } from "../plugins/axios";

const endpoints = {
  getUsers: "/users",
  getPosts: `/users/`,
};

const api = {
  async getUsers() {
    const response = await instance.get(endpoints.getUsers);
    return response;
  },
  async getPosts(id) {
    const response = await instance.get(endpoints.getPosts + `${id}/posts`);
    return response;
  },
};
export default api;
