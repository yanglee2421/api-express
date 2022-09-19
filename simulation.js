const express = require("express");
const server = express();
const path = require("path");
server.listen(4399, (err) => {
  err || console.log("待机中。。。");
});
server.use(express.static(path.resolve(__dirname, "./data")));
server.all("*", (req, res, next) => {
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
 * 解析form请求的body
 * 解析xmlHttpRequest请求的body
 */
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// 预览
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
// 下载
server.get("/pdf-raw", (req, res) => {
  res.download(path.resolve(__dirname, "./data/777.pdf"));
  console.log(req.path, req.body);
});
server.get("/pic-raw", (req, res) => {
  res.download(path.resolve(__dirname, "./data/pic02.jpg"));
  console.log(req.path, req.body);
});
