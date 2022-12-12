const path = require("path");
const router = require("express").Router();
const useCors = require("@/hook/useCors");
const { verify } = require("@/hook/useJWT");

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
/**
 * 导出路由器
 */
module.exports = router;
