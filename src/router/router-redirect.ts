import { Router } from "express";
import { HPImageArchive } from "@/api";
export const redirect = Router();
/**
 * 重定向路由
 */
redirect.get("/redirect/*", (req, res) => {
  HPImageArchive()
    .then(({ images }) => {
      const imgArr = images.map((item) => `https://cn.bing.com${item.url}`);
      res.redirect(imgArr[0]);
    })
    .catch((err) => {
      res.writeHead(500);
    });
});
