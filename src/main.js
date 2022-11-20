const express = require("express");
const server = express();
const path = require("path");
// 监听端口
server.listen(80, (err) => {
  console.log(err || "stand by");
});
/**
 * 部署静态资源
 * 解析json格式的请求体
 * 解析urlencoded格式的请求体
 */
server.use(express.static(path.resolve(__dirname, "../dist")));
server.use("/public", express.static(path.resolve(__dirname, "../public")));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
/**
 * 设置全局响应头
 * 跨域
 * 限制请求方式
 *
 * 内容类型
 */
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
 * 必应壁纸
 */
server.use(require("./router/bingRouter"));
/**
 * 文件预览下载接口
 */
server.use(require("./router/fileRouter"));
/**
 * 代理接口
 */
server.use(require("./router/redirectRouter"));
/**
 * 路由history模式
 */
server.use(require("connect-history-api-fallback")());
