import fs from "fs/promises";
import path from "path";
import type { RequestHandler } from "express";
export function uselog(): RequestHandler {
  return (req, res, next) => {
    const date = new Date().toLocaleString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      weekday: "long",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    fs.writeFile(
      path.resolve(__dirname, "./log.txt"),
      `${date} ${req.path}\n`,
      { encoding: "utf-8", flag: "a" }
    )
      .then(() => next())
      .catch(() => res.writeHead(500, "打 log 时挂了"));
  };
}
