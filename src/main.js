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
 * 代理必应每日壁纸接口
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
/**
 * 文件预览下载接口
 */
const useFile = require("./api/File");
useFile(server);
/**
 * 代理接口
 */
const useRedirect = require("./api/redirect");
useRedirect(server);
