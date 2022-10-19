const axios = require("axios");
const request = axios.create({
  timeout: 60000,
  baseURL: "",
});
request.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer `;
    config.headers["Content-Type"] = "application/json;charset=utf-8";
    return config;
  },
  (err) => {
    console.log(err);
  }
);
request.interceptors.response.use(
  (res) => {
    const { data, status, statusText } = res;
    if (status === 200) {
      return data;
    } else {
      console.warn(statusText);
    }
  },
  (err) => {
    console.log(err);
  }
);
module.exports = request;
