const cors = require("cors");
const whiteList = [
  "http://192.168.3.3",
  "http://192.168.3.3:5173",
  "http://192.168.3.3:5174",
];

module.exports = () =>
  cors((req, callback) => {
    const origin = whiteList.includes(req.headers.origin) ? true : false;
    callback(null, { origin });
  });
