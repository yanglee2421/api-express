// 挂载 params & query 参数
const params = "list";
const url_fetch = new URL(`/api/joke/${params}`, "https://autumnfish.cn");
url_fetch.searchParams.set("key", "value");
// 挂载 body参数
const body = JSON.stringify({});
// 配置 headers
const headers = new Headers();
headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
headers.set("Content-Type", "application/json;charset=utf-8");
// 发送
fetch(url_fetch, {
  method: "get",
  headers,
  body,
})
  .then((res) => (res.ok ? res.json() : Promise.reject()))
  .then((data) => console.log(data))
  .catch(() => {});
