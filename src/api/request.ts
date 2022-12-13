import axios, { AxiosRequestConfig } from "axios";
const request = axios.create({
  timeout: 60000,
  baseURL: "",
});
request.interceptors.request.use((config) => {
  if (!config.headers) return config;
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
export default async <T = unknown>(params: AxiosRequestConfig) => {
  return (await request(params)) as unknown as T;
};
