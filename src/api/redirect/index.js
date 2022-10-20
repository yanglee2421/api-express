const useLog = require("../../hook/useLog");
module.exports = (server) => {
  server.get("/redirect/*", (req, res) => {
    res.redirect("https://www.baidu.com");
    useLog(JSON.stringify(req.path.replace(/^\/redirect/, "")));
  });
};
