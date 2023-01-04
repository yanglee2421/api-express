import cors from "cors";

const whiteList = [
  "http://127.0.0.1",
  "http://localhost",
  "http://192.168.1.4",
];

export default () =>
  cors((req, callback) => {
    const origin = whiteList.includes(req.headers.origin || "");
    callback(null, { origin });
  });
