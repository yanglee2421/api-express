const express = require("express");
const server = express()
const fs = require('fs')
// 监听端口
server.listen(1818, err => {
    err || console.log("服务器启动成功")
})
// 部署网页
server.use(express.static(__dirname + "/dist"))
// 全局响应头
server.all('*', (req, res, next) => {
    // 允许跨域
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    next();
})
// get请求
server.get("/get", (req, res) => {
    res.send({
        name: "张三"
    })
})
// AdGuard广告规则
server.get("/AdGuard", (req, res) => {
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    fs.readFile("./AdRules.txt", "utf-8", (err, file) => {
        res.send(file)
    })
})