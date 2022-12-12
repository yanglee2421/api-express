require("module-alias/register");
const history = require("connect-history-api-fallback");
const express = require("express");
const server = express();
const path = require("path");
const http = require("http");
http.createServer(server).listen(80, (err) => {
  console.log(err || "stand by");
});
/**
 * 路由
 * 必应壁纸
 * 文件预览下载接口
 * 代理接口
 */
server
  .use("/api", require("@/router/login"))
  .use(require("@/router/bing"))
  .use("/file", require("@/router/file"))
  .use(require("@/router/redirect"));
/**
 * 公开资源
 * 主页
 * vue微应用
 */
server
  .use("/public", express.static(path.resolve(__dirname, "../public")))
  .use(history(), express.static(path.resolve(__dirname, "../dist")))
  .get("/vue", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../micro-app/dist/index.html"));
  })
  .use(
    "/vue",
    history(),
    express.static(path.resolve(__dirname, "../micro-app/dist"))
  );
