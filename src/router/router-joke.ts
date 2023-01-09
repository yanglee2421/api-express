import { Router } from "express";
export const joke = Router();
joke.get("", (req, res) => {
  const { num = "1" } = req.query as Record<string, string>;
  const url = new URL("https://autumnfish.cn/api/joke/list");
  url.searchParams.set("num", num);
  fetch(url, {
    method: "get",
    headers: new Headers(),
    // body: JSON.stringify({}),
  })
    .then((res) => (res.ok ? res.json() : Promise.reject("upstream error")))
    .then((data) => res.json({ isOk: true, data }))
    .catch((mes) => res.json({ isOk: false, mes }));
});
