import path from "node:path";
import { Router } from "express";
export const file = Router();
file
  /**
   * 服务接口
   */
  .get("/pdf-blob", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.sendFile(path.resolve(__dirname, "../../../public/index.txt"));
  })
  .get("/pic-blob", (req, res) => {
    res.setHeader("Content-Type", "image/jpeg");
    res.sendFile(path.resolve(__dirname, "../../../public/img/bg.jpg"));
  })
  .get("/pdf-raw", (req, res) => {
    res.download(path.resolve(__dirname, "../../../public/index.txt"));
  })
  .get("/pic-raw", (req, res) => {
    res.download(path.resolve(__dirname, "../../../public/img/bg.jpg"));
  });
