const express = require("express");
const server = express();
server.listen(4399, (err) => {
  err || console.log(err);
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
 * 实施工单表格
 * 工单类型
 * 实施系统
 */
server.post("/ticket/api/Ticket/GetTicketPage", (req, res) => {
  const Data = require("./data/GetTicketPage.js");
  const ret = {
    Code: 1,
    Data,
  };
  res.send(ret);
  console.log(req.path, req.query);
});
server.post("/ticket/api/Ticket/GetTicketType", (req, res) => {
  const Data = require("./data/GetTicketType.js");
  const ret = {
    Code: 1,
    Data,
  };
  res.send(ret);
  console.log(req.path, req.query);
});
server.post("/ticket/api/Ticket/GetTicketSystemType", (req, res) => {
  const Data = require("./data/GetTicketSystemType.js");
  const ret = {
    Code: 1,
    Data,
  };
  res.send(ret);
  console.log(req.path, req.query);
});
