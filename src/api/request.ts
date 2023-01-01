import axios, { AxiosRequestConfig } from "axios";
const request = axios.create({
  baseURL: "",
  timeout: 60000,
  headers: {
    common: {
      "Content-Type": `application/json;charset=utf-8`,
    },
  },
});
request.interceptors.request.use((config) => config);
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
