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
 */
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
// 预览
server.get("/pdf-blob", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./data/888.pdf"));
  console.log(req.path, req.body);
});
// 下载
server.get("/pdf-raw", (req, res) => {
  res.download(path.resolve(__dirname, "./data/777.pdf"));
  console.log(req.path, req.body);
});
