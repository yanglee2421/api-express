import cors from "cors";
import HPImageArchive from "@/api/HPImageArchive";
import { Router } from "express";
/**
 * 代理必应每日壁纸接口
 */
const router = Router();
router.use(cors() as any).get("/bing", (req, res) => {
  const { idx = 0, n = 1 } = req.query as unknown as { idx: number; n: number };
  HPImageArchive({ idx, n })
    .then(({ images }) => {
      res.json(images.map((item) => `https://cn.bing.com${item.url}`));
    })
    .catch((err) => {
      res.writeHead(500);
    });
});
export default router;
