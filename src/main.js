const express = require("express");
const server = express();
// 监听端口
server.listen(80, (err) => {
  console.log(err ? err : "stand by");
});
// 部署静态文件
const path = require("path");
server.use(express.static(path.resolve(__dirname, "../dist")));
server.use("/public", express.static(path.resolve(__dirname, "../public")));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// 设置全局响应头
server.all("*", (req, res, next) => {
  /**
   * 跨域
   * 限制请求方式
   *
   * 内容类型
   */
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});
/**
 * pdf和图片
 * 预览
 * 下载
 */
server.get("/pdf-blob", (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(path.resolve(__dirname, "./data/123.pdf"));
  console.log(req.path, req.body);
});
server.get("/pic-blob", (req, res) => {
  res.setHeader("Content-Type", "image/jpeg");
  res.sendFile(path.resolve(__dirname, "./data/pic02.jpg"));
  console.log(req.path, req.body);
});
server.get("/pdf-raw", (req, res) => {
  res.download(path.resolve(__dirname, "./data/777.pdf"));
  console.log(req.path, req.body);
});
server.get("/pic-raw", (req, res) => {
  res.download(path.resolve(__dirname, "./data/pic02.jpg"));
  console.log(req.path, req.body);
});
