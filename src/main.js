require("module-alias/register");
const express = require("express");
const server = express();
const path = require("path");
// 监听端口
server.listen(80, (err) => {
  console.log(err || "stand by");
});
/**
 * 设置全局响应头
 * 跨域
 * 限制请求方式
 *
 */
server.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});
/**
 * 路由
 * json格式的请求体
 * urlencoded格式的请求体
 * 必应壁纸
 * 文件预览下载接口
 * 代理接口
 */
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(require("@/router/bingRouter"));
server.use(require("@/router/fileRouter"));
server.use(require("@/router/redirectRouter"));
/**
 * 路由history模式
 * 部署静态资源
 */
server.use(require("connect-history-api-fallback")());
server.use(express.static(path.resolve(__dirname, "../dist")));
server.use("/public", express.static(path.resolve(__dirname, "../public")));
