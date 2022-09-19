const express = require("express");
const server = express();
server.listen(4399, (err) => {
  err || console.log("待机中。。。");
});
server.all("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  res.setHeader("Content-Type", "application/json;charset=utf-8");
  next();
});
/**
 */
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.post("/opt", (req, res) => {
  const Data = [];
  for (let i = 1; i < 100; i++) {
    Data.push({
      DictionaryValue: `用户${i}`,
      DictionaryKey: i,
    });
  }
  const ret = {
    Code: 1,
    Data,
  };
  res.send(ret);
  console.log(req.path, req.body);
});
