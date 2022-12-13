import "module-alias/register";
import history from "connect-history-api-fallback";
import express from "express";
import path from "path";
import { createServer } from "http";
import mod from "@/util/mode";
const server = express();
createServer(server).listen(80, () => {
  console.log("stand by");
});
mod();
