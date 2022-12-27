import history from "connect-history-api-fallback";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import useCors from "@/hook/useCors";
import { useVerify } from "@/hook/useJWT";
import { redRouter, bingRouter, fileRouter, loginRouter } from "@/router";
import { useDB, uselog } from "@/hook";
import User from "@/hook/useDB/entity/User";
const rootUrl = "C:\\Users\\xtcff\\Desktop\\AdGuard\\";
const server = express();
createServer(server).listen(80, () => {
  console.info("service is standing by");
  console.info("http://localhost");
});
/**
 * REpresentational State Tranfer API
 */
server
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(uselog())
  .use(bingRouter)
  .use(redRouter);
server.use("/auth", useCors(), loginRouter);
server.use("/api", useCors(), useVerify(), fileRouter);
/**
 * 部署网页
 */
server
  .use("/public", express.static(rootUrl + "public"))
  .use("/vue", history(), express.static(rootUrl + "page\\vue-app"))
  .use("/react", history(), express.static(rootUrl + "page\\react-app"));
useDB((db) => {
  const user = new User();
  user.user_name = "Yang Lee";
  user.user_pwd = "abc.123";
  db.manager.save([user]).then((res) => {
    console.log("增");
  });
  // db.manager.delete();
  // db.manager.update();
  db.manager.find(User).then((res) => {});
});
