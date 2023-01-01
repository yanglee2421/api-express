import { clear } from "node:console";
import fs from "node:fs/promises";
import path from "node:path";
/* const filePath = path.resolve(__dirname, "../hook/uselog/log.txt");
// file
fs.appendFile(filePath, "xxx", { encoding: "utf-8" });
fs.rm(path.resolve(__dirname, "./l.txt"));
fs.copyFile(filePath, path.resolve(__dirname, "./l.txt"));
fs.rename(filePath, path.resolve(__dirname, "./l.txt"));
fs.readFile(filePath);
// folder
fs.mkdir(path.resolve(__dirname, "./dir"));
fs.rmdir(path.resolve(__dirname, "./dir"));
 */
const str = "这是一段很长很长的话，真的很长很长的话！";
const fun = (str: string, isOver: boolean) =>
  new Promise((resolve) => {
    console.log(str);
    isOver &&
      setTimeout(() => {
        console.clear();
        resolve(str);
      }, 200);
  });
let target = "";
(async () => {
  for (const s of str) {
    target += s;
    const i = await fun(target, target.length !== str.length);
  }
})();
