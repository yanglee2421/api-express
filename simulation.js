const express = require("express");
const server = express();
const path = require("path");
server.listen(4399, (err) => {
  err || console.log("待机中。。。");
});
server.use(express.static(path.resolve(__dirname, "./data")));
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
/* server.get("/pdf", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./data/133.pdf"));
  console.log(req.path, req.body);
}); */
