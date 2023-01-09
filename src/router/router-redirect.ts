import { Router } from "express";
namespace Type {
  export interface res {
    images: any[];
  }
}
/**
 * 重定向路由
 */
export const redirect = Router();
redirect.get("/redirect/*", (req, res) => {
  const url = new URL("https://cn.bing.com/HPImageArchive.aspx");
  url.searchParams.set("format", "js");
  url.searchParams.set("idx", "0");
  url.searchParams.set("n", "1");
  const bingUrl = "https://cn.bing.com";
  fetch(url, { method: "get", headers: new Headers() })
    .then((res) => (res.ok ? res.json() : Promise.reject("upstream error")))
    .then(({ images }: Type.res) => res.redirect(bingUrl + images[0]))
    .catch((mes) => res.json({ isOk: false, mes }));
});
