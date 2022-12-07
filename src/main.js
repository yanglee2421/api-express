require("module-alias/register");
const express = require("express");
const server = express();
const path = require("path");
const useCors = require("@/hook/useCors");
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
server
  .use(useCors())
  /**
   * 路由
   * json格式的请求体
   * urlencoded格式的请求体
   * 必应壁纸
   * 文件预览下载接口
   * 代理接口
   */
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(require("@/router/login"))
  .use(require("@/router/bingRouter"))
  .use("/file", require("@/router/fileRouter"))
  .use(require("@/router/redirectRouter"))
  /**
   * 路由history模式
   * 部署静态资源
   */
  .use(require("connect-history-api-fallback")())
  .use(express.static(path.resolve(__dirname, "../dist")))
  .use("/public", express.static(path.resolve(__dirname, "../public")));
