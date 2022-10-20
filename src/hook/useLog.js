const fs = require("fs");
const path = require("path");
const useLog = (reqPath) => {
  fs.appendFile(
    path.resolve(__dirname, "../../log/log.txt"),
    `${new Date()}，请求了：${reqPath}\n`,
    (err) => {
      console.log(err);
    }
  );
};
module.exports = useLog;
