import { Router } from "express";
namespace Type {
  export interface res {
    images: any[];
  }
}
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
  const bingUrl = "https://cn.bing.com";
  fetch(url, { method: "get", headers: new Headers() })
    .then((res) => (res.ok ? res.json() : Promise.reject("upstream error")))
    .then(({ images }: Type.res) =>
      res.json({ isOk: true, rows: images.map((item) => bingUrl + item.url) })
    )
    .catch(({ message }) => res.json({ isOk: false, message }));
});
