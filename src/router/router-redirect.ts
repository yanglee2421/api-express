import { Router } from "express";
import { HPImageArchive } from "@/api";
const router = Router();
export default router;
/**
 * 重定向路由
 */
router.get("/redirect/*", (req, res) => {
  HPImageArchive()
    .then(({ images }) => {
      const imgArr = images.map((item) => `https://cn.bing.com${item.url}`);
      res.redirect(imgArr[0]);
    })
    .catch((err) => {
      res.writeHead(500);
    });
});
