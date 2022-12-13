import path from "path";
import useCors from "@/hook/useCors";
import { Router } from "express";
import { verify } from "@/hook/useJWT";
const router = Router();
router
  /**
   * 跨域校验
   * 身份校验
   */
  .use(useCors())
  .use(verify())
  /**
   * 服务接口
   */
  .get("/pdf-blob", (req, res) => {
    res.setHeader("Content-Type", "application/pdf");
    res.sendFile(path.resolve(__dirname, "../../../public/pdf.pdf"));
  })
  .get("/pic-blob", (req, res) => {
    res.setHeader("Content-Type", "image/jpeg");
    res.sendFile(path.resolve(__dirname, "../../../public/img/bg.jpg"));
  })
  .get("/pdf-raw", (req, res) => {
    res.download(path.resolve(__dirname, "../../../public/pdf.pdf"));
  })
  .get("/pic-raw", (req, res) => {
    res.download(path.resolve(__dirname, "../../../public/img/bg.jpg"));
  });
export default router;
