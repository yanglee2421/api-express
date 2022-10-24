const fs = require("fs");
const path = require("path");
module.exports = (reqPath) => {
  fs.writeFile(
    path.resolve(__dirname, "../../log/log.txt"),
    `${new Date()}，请求了：${reqPath}\n`,
    { flag: "a" },
    (err) => {
      err && console.log(err);
    }
  );
};
