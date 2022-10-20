const fs = require("fs");
const path = require("path");
module.exports = (reqPath) => {
  fs.appendFile(
    path.resolve(__dirname, "../../log/log.txt"),
    `${new Date()}，请求了：${reqPath}\n`,
    (err) => {
      err && console.log(err);
    }
  );
};
