const path = require("path");
const Service = require("node-windows").Service;
const service = new Service({
  name: "NodeServer",
  description: "Node搭建的个人服务器",
  script: path.resolve(__dirname, "../src/main.js"),
});
service.on("install", () => {
  service.start();
  console.log("安装成功！");
});
service.install();
