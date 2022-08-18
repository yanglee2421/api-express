const express = require("express");
const server = express()
const fs = require('fs')
// 监听端口
server.listen(1818, err => {
    err || console.log("服务器启动成功")
})
// 部署网页
server.use(express.static(__dirname + "/dist"))
// get请求
server.get("/get", (req, res) => {
    res.send({
        name: "张三"
    })
})
// AdGuard广告规则
server.get("/AdGuard", (req, res) => {
    fs.readFile("./AdRules.txt", "utf-8", (err, file) => {
        console.log(req)
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.send(file)
    })
})