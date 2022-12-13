const path = require("path");
const { Service } = require("node-windows");
const service = new Service({
  name: "node-server",
  script: path.resolve(__dirname, "./app/main.js"),
  description: "Node搭建的个人服务器",
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
service.install();
module.exports = service;
