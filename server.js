const express = require("express");
const server = express()
// 监听端口
server.listen(1818, err => {
    err || console.log("stand by")
})
// 部署静态文件
server.use(express.static(__dirname + "/dist"))
// 设置全局响应头
server.all('*', (req, res, next) => {
    /**
     * 跨域
     * 限制请求方式
     * 
     * 内容类型
     */
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization')
    res.setHeader("Content-Type", "application/json;charset=utf-8")
    next()
})
// get请求
server.get("/AdGuard", (req, res) => {
    res.setHeader("Content-Type", "text/plain;charset=utf-8");
    res.sendFile(__dirname + "/AdRules.txt")
    console.log(req.query)
})
/**
 * post
 * 处理请求
 * 处理表单
 */
server.use(express.json())
server.use(express.urlencoded({ extended: false }))
server.post("/pic/:params", (req, res) => {
    res.setHeader("Content-Type", "image/jpeg")
    res.sendFile(__dirname + "/dist/assets/1.07b89d99.jpg")
    console.log(req.params)
    console.log(req.body)
})