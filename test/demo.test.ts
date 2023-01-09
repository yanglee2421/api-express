// 处理 query 参数
const url = new URL("https://autumnfish.cn/api/joke/list");
url.searchParams.set("num", "1");
// 处理 headers
const headers = new Headers();
headers.set("Authorization", `Bearer ${localStorage.getItem("token")}`);
headers.set("Content-Type", "application/json;charset=utf-8");
// 处理请求体
const body = JSON.stringify({});
// 发请求
fetch(url, {
  method: "get",
  headers,
  body,
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
