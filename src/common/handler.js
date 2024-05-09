import axios from "axios";

function Post(url, parameter) {
  return axios.post(url, parameter).then((response) => {
    if (response.status === "success") {
      const error = response.status;
      return Promise.reject(error);
    }
    return response.data;
  });
}

function Get(url) {
  return axios.get(url).then((response) => {
    if (response.status === "success") {
      const error = response.status;
      return Promise.reject(error);
    }
    return response.data;
  });
}

export default { Post, Get };
