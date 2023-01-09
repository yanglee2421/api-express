import { Router } from "express";
export const joke = Router();
joke.get("", (req, res) => {
  const { num = "1" } = req.query as Record<string, string>;
  const url = new URL("https://autumnfish.cn/api/joke/list");
  url.searchParams.set("num", num);
  fetch(url, { method: "get", headers: new Headers() })
    .then((res) => {
      if (res.ok) return res.json();
      throw "upstream error";
    })
    .then((data) => {
      const { code, data: rows, mes } = data;
      if (code === 200) return res.json({ isOk: true, rows });
      throw mes;
    })
    .catch((mes) => res.json({ isOk: false, mes }));
});
