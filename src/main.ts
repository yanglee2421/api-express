import { createServer } from "node:http";
import path from "node:path";
import history from "connect-history-api-fallback";
import cors from "cors";
import express from "express";
import { useCors, uselog, useVerify } from "@/hook";
import { redirect, bing, file, login, pwd, joke } from "@/router";
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
  .use(bing)
  .use(redirect);
server.use("/auth", useCors(), login);
server.use("/api", useCors(), useVerify(), file);
server.use("/pwd", useCors(), useVerify(), pwd);
server.use("/joke", useCors(), useVerify(), joke);
/**
 * 部署网页
 */
server
  .use("/public", express.static(path.resolve(__dirname, "../public")))
  .use(
    "/docs",
    history(),
    express.static(path.resolve(__dirname, "../page/docs"))
  )
  .use(
    "/vue",
    history(),
    express.static(path.resolve(__dirname, "../page/vue-app"))
  )
  .use(
    "/react",
    history(),
    express.static(path.resolve(__dirname, "../page/react-app"))
  );
