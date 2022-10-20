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
 * pdf和图片接口
 * 预览
 * 下载
 */
const fs = require("fs");
server.get("/pdf-blob", (req, res) => {
  res.setHeader("Content-Type", "application/pdf");
  res.sendFile(path.resolve(__dirname, "./assets/pdf.pdf"));
  fs.appendFile(
    path.resolve(__dirname, "../log/log.txt"),
    `${new Date()}，请求了：${req.path}\n`,
    (err) => {
      console.log(err);
    }
  );
});
server.get("/pic-blob", (req, res) => {
  res.setHeader("Content-Type", "image/jpeg");
  res.sendFile(path.resolve(__dirname, "./assets/bg.jpg"));
  fs.appendFile(
    path.resolve(__dirname, "../log/log.txt"),
    `${new Date()}，请求了：${req.path}\n`,
    (err) => {
      console.log(err);
    }
  );
});
server.get("/pdf-raw", (req, res) => {
  res.download(path.resolve(__dirname, "./assets/pdf.pdf"));
  fs.appendFile(
    path.resolve(__dirname, "../log/log.txt"),
    `${new Date()}，请求了：${req.path}\n`,
    (err) => {
      console.log(err);
    }
  );
});
server.get("/pic-raw", (req, res) => {
  res.download(path.resolve(__dirname, "./assets/bg.jpg"));
  fs.appendFile(
    path.resolve(__dirname, "../log/log.txt"),
    `${new Date()}，请求了：${req.path}\n`,
    (err) => {
      console.log(err);
    }
  );
});
/**
 * 必应每日壁纸重定向接口
 */
const request = require("./api/request.js");
server.get("/bing", (req, res) => {
  const { idx = 0, n = 1 } = req.query;
  request({
    method: "get",
    url: "https://cn.bing.com/HPImageArchive.aspx",
    params: {
      format: "js",
      idx,
      n,
    },
  }).then(({ images }) => {
    res.json(images.map((item) => `https://cn.bing.com${item.url}`));
  });
});
