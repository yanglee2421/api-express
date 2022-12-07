const path = require("path");
const router = require("express").Router();
const useToken = require("@/hook/useToken");

router
  /**
   * 身份校验
   */
  .use(useToken())
  /**
   * 需要校验的接口
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
