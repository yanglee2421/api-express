import { Router } from "express";
import { HPImageArchive } from "@/api";
/**
 * 代理必应每日壁纸接口
 */
const router = Router();
export default router;
router.get("/bing", (req, res) => {
  const { idx = 0, n = 8 } = req.query as unknown as { idx: number; n: number };
  HPImageArchive({ idx, n })
    .then(({ images }) => {
      res.json(images.map((item) => `https://cn.bing.com${item.url}`));
    })
    .catch((err) => {
      res.writeHead(500);
    });
});
