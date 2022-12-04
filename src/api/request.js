const axios = require("axios");
const request = axios.create({
  timeout: 60000,
  baseURL: "",
});
request.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer `;
  config.headers["Content-Type"] = "application/json;charset=utf-8";
  return config;
});
request.interceptors.response.use(
  (res) => {
    const { data, status, statusText } = res;
    if (status === 200) return data;
    console.warn(statusText);
    return new Promise(() => {});
  },
  (err) => {
    console.error(err);
    return new Promise(() => {});
  }
);
module.exports = request;
