import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json; charset=UTF-8",
};

const instance = axios.create({
  baseURL,
  headers,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export { instance };
