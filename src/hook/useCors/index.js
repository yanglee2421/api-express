const cors = require("cors");
const whiteList = [
  "http://127.0.0.1",
  "http://localhost",
  "http://192.168.1.4",
  "http://localhost:5173",
  "http://localhost:5174",
];

module.exports = () =>
  cors((req, callback) => {
    const origin = whiteList.includes(req.headers.origin) ? true : false;
    callback(null, { origin });
  });
