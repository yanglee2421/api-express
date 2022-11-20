const useLog = require("../../hook/useLog");
const router = require("express").Router();
router.get("/redirect/*", (req, res) => {
  res.redirect("https://www.baidu.com");
  useLog(JSON.stringify(req.path.replace(/^\/redirect/, "")));
});
module.exports = router;
