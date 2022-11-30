const fs = require("fs");
const path = require("path");
module.exports = (reqPath) => {
  const date = new Date().toLocaleString("zh-CN", {
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    weekday: "long",
  });
  fs.writeFile(
    path.resolve(__dirname, "../../log/log.txt"),
    `${date}，请求了：${reqPath}\n`,
    { flag: "a" },
    (err) => {
      err && console.log(err);
    }
  );
};
