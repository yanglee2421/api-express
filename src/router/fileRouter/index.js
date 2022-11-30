const path = require("path");
const useLog = require("@/hook/useLog");
const router = require("express").Router();
/**
 * pdf和图片接口
 * 预览
 * 下载
 */
router.get("/pdf-blob", (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(path.resolve(__dirname, "../../../public/pdf.pdf"));
  useLog(req.path);
});
router.get("/pic-blob", (req, res) => {
  res.setHeader("Content-Type", "image/jpeg");
  res.sendFile(path.resolve(__dirname, "../../../public/img/bg.jpg"));
  useLog(req.path);
});
router.get("/pdf-raw", (req, res) => {
  res.download(path.resolve(__dirname, "../../../public/pdf.pdf"));
  useLog(req.path);
});
router.get("/pic-raw", (req, res) => {
  res.download(path.resolve(__dirname, "../../../public/img/bg.jpg"));
  useLog(req.path);
});
/**
 * 导出路由器
 */
module.exports = router;
