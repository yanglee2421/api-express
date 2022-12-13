const path = require("path");
const fs = require("fs/promises");
const { Service } = require("node-windows");
const scriptUrl = path.resolve(__dirname, "./app/main.js");
const service = new Service({
  name: "A Node.js service by Yang Lee",
  script: scriptUrl,
  description: "",
  abortOnError: true,
  nodeOptions: [],
});
service.on("install", () => {
  service.start();
  console.log("安装成功！");
});
service.on("uninstall", () => {
  console.log("卸载成功！");
});
fs.readFile(scriptUrl, "utf8")
  .then((res) => {
    service.install();
  })
  .catch(() => {
    console.error("安装时出现了一些问题，可能是没有打包");
  });
module.exports = service;
