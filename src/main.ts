import { createServer } from "node:http";
import path from "node:path";
import history from "connect-history-api-fallback";
import cors from "cors";
import express from "express";
import { useCors, uselog } from "@/hook";
import { useVerify } from "@/hook/useJWT";
import { redRouter, bingRouter, file, login, pwd } from "@/router";
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
  .use("/public", express.static(path.resolve(__dirname, "../public")))
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
