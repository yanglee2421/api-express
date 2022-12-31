import history from "connect-history-api-fallback";
import express from "express";
import { createServer } from "http";
import cors from "cors";
import useCors from "@/hook/useCors";
import { useVerify } from "@/hook/useJWT";
import { redRouter, bingRouter, file, login, pwd } from "@/router";
import { uselog } from "@/hook";
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
server.use("/auth", useCors(), login);
server.use("/api", useCors(), useVerify(), file);
server.use("/pwd", useCors(), useVerify(), pwd);
/**
 * 部署网页
 */
server
  .use("/public", express.static(rootUrl + "public"))
  .use("/vue", history(), express.static(rootUrl + "page\\vue-app"))
  .use("/react", history(), express.static(rootUrl + "page\\react-app"));
