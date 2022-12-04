const path = require("path");
const Service = require("node-windows").Service;
const service = new Service({
  name: "node-server",
  description: "Node搭建的个人服务器",
  script: path.resolve(__dirname, "../src/main.js"),
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
