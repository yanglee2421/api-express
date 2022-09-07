const express = require("express");
const server = express()
const fs = require("fs")
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
const dateFormat = require("./hook/dateFormat.js")
server.post("/vueFile", (req, res) => {
    res.setHeader("Content-Type", "text/plain;charset=utf-8")
    res.sendFile(__dirname + `/assets/${req.body.fileName}.vue`)
    const time = dateFormat(new Date(), true)
    const fileContent = `${time}:${JSON.stringify(req.body)}\n`
    fs.appendFile(__dirname + "/log.txt", fileContent, err => {
        err && console.log(err)
    })
    console.log(req.params)
})
/**
 * 模拟请求
 * 
 */
server.get("/table", (req, res) => {
    const arr = []
    for (let i = 0; i < 100; i++) {
        const obj = {
            name: "姓名" + i,
            age: i,
        }
        arr.push(obj)
    }
    res.send(arr)
    console.log(req.path, req.query)
})
server.post("/track", (req, res) => {
    const fileContent = JSON.stringify(req.body)
    console.log(req.path, req.body)
    fs.writeFile(__dirname + "/track.json", fileContent, err => {
        err && console.log(err)
    })
})