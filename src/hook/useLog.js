const fs = require("fs");
const path = require("path");
module.exports = (reqPath) => {
  fs.writeFile(
    path.resolve(__dirname, "../../log/log.txt"),
    `${new Date().toLocaleString("zh-CN", {
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
    })}，请求了：${reqPath}\n`,
    { flag: "a" },
    (err) => {
      err && console.log(err);
    }
  );
};
