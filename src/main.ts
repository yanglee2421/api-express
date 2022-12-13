import "module-alias/register";
import history from "connect-history-api-fallback";
import express from "express";
import path from "path";
import { createServer } from "http";
import { redRouter, bingRouter, fileRouter, loginRouter } from "@/router";
const server = express();
createServer(server).listen(80, () => {
  console.info("service is standing by");
  console.info("http://localhost");
});
/**
 * 部署网页
 */
server
  .use(
    "/vue",
    history(),
    express.static(path.resolve(__dirname, "../../page/vue-app"))
  )
  .use(
    "/react",
    history(),
    express.static(path.resolve(__dirname, "../../page/vue-app"))
  );
/**
 * 路由
 */
server.use(bingRouter).use(fileRouter).use(loginRouter).use(redRouter);
