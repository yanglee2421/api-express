import { Router } from "express";
// import { HPImageArchive } from "@/api";
/**
 * 代理必应每日壁纸接口
 */
export const bing = Router();
bing.get("/bing", (req, res) => {
  const { idx = "0", n = "8" } = req.query as Record<string, string>;
  const url = new URL("https://cn.bing.com/HPImageArchive.aspx");
  url.searchParams.set("format", "js");
  url.searchParams.set("idx", idx);
  url.searchParams.set("n", n);
  fetch(url, { method: "get", headers: new Headers() })
    .then((res) => (res.ok ? res.json() : Promise.reject("upstream error")))
    .then(({ images }) =>
      res.json({
        isOk: true,
        images: images.map((item: any) => `https://cn.bing.com${item.url}`),
      })
    )
    .catch((mes) => res.json({ isOk: false, mes }));
  /* HPImageArchive({ idx, n })
    .then(({ images }) =>
      res.json(images.map((item) => `https://cn.bing.com${item.url}`))
    )
    .catch((err) => res.writeHead(500)); */
});
