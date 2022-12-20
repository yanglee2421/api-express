import "module-alias/register";
import history from "connect-history-api-fallback";
import express from "express";
import { createServer } from "http";
import { redRouter, bingRouter, fileRouter, loginRouter } from "@/router";
import { useDB, uselog } from "@/hook";
import User from "@/hook/useDB/entity/User";
const server = express();
createServer(server).listen(80, () => {
  console.info("service is standing by");
  console.info("http://localhost");
});
/**
 * 部署网页
 */
const rootUrl = "C:\\Users\\xtcff\\Desktop\\AdGuard\\";
server
  .use("/public", express.static(rootUrl + "public"))
  .use("/vue", history(), express.static(rootUrl + "page\\vue-app"))
  .use("/react", history(), express.static(rootUrl + "page\\react-app"));
/**
 * 路由
 */
server
  .use(uselog())
  .use(bingRouter)
  .use(redRouter)
  .use("/api", fileRouter)
  .use("/api", loginRouter);
useDB((db) => {
  const user = new User();
  user.user_name = "Yang Lee";
  user.user_pwd = "abc.123";
  db.manager.save([user]).then((res) => {
    console.log("增");
  });
  // db.manager.delete();
  // db.manager.update();
  db.manager.find(User).then((res) => {
    console.log(res);
  });
});
