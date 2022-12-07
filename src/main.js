require("module-alias/register");
const express = require("express");
const server = express();
const path = require("path");
const useCors = require("@/hook/useCors");
const http = require("http");
http.createServer(server).listen(80, (err) => {
  console.log(err || "stand by");
});
server
  /**
   * 中间件
   * cors解决跨域
   * json格式的请求体
   * urlencoded格式的请求体
   */
  .use(useCors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  /**
   * 路由
   * 必应壁纸
   * 文件预览下载接口
   * 代理接口
   */
  .use("/api", require("@/router/login"))
  .use(require("@/router/bingRouter"))
  .use("/file", require("@/router/file"))
  .use(require("@/router/redirectRouter"))
  /**
   * 路由history模式
   * 部署静态资源
   */
  .use(require("connect-history-api-fallback")())
  .use(express.static(path.resolve(__dirname, "../dist")))
  .use("/public", express.static(path.resolve(__dirname, "../public")));
