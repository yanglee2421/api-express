const path = require("path");
const Service = require("node-windows").Service;
const service = new Service({
  name: "NodeServer",
  description: "Node搭建的个人服务器",
  script: path.resolve(__dirname, "../src/main.js"),
});
service.on("uninstall", () => {
  console.log("卸载成功！");
});
service.uninstall();
