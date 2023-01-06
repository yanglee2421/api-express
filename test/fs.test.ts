import fs from "node:fs/promises";
import path from "node:path";
const filePath = path.resolve(__dirname, "../README.md");
const neoPath = path.resolve(__dirname, "./l.txt");
// 追写
fs.appendFile(filePath, "")
  .then((res) => {})
  .catch((err) => {});
// 读
fs.readFile(filePath)
  .then((file) => {})
  .catch((err) => {});
// 删文件or文件夹
fs.rm(filePath)
  .then((res) => {})
  .catch((err) => {});
// 复制
fs.copyFile(filePath, neoPath)
  .then((res) => {})
  .catch((err) => {});
// 重命名
fs.rename(filePath, neoPath)
  .then((res) => {})
  .catch((err) => {});
// 创建folder
fs.mkdir(filePath)
  .then((res) => {})
  .catch((err) => {});
// 移除folder
fs.rmdir(filePath)
  .then((res) => {})
  .catch((err) => {});
