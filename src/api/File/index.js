const path = require("path");
const useLog = require("../../hook/useLog");
module.exports = (server) => {
  /**
   * pdf和图片接口
   * 预览
   * 下载
   */
  server.get("/pdf-blob", (req, res) => {
    res.setHeader("Content-Type", "application/pdf");
    res.sendFile(path.resolve(__dirname, "../../assets/pdf.pdf"));
    useLog(req.path);
  });
  server.get("/pic-blob", (req, res) => {
    res.setHeader("Content-Type", "image/jpeg");
    res.sendFile(path.resolve(__dirname, "../../assets/bg.jpg"));
    useLog(req.path);
  });
  server.get("/pdf-raw", (req, res) => {
    res.download(path.resolve(__dirname, "../../assets/pdf.pdf"));
    useLog(req.path);
  });
  server.get("/pic-raw", (req, res) => {
    res.download(path.resolve(__dirname, "../../assets/bg.jpg"));
    useLog(req.path);
  });
};
