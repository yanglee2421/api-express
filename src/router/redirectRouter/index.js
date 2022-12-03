const useLog = require("@/hook/useLog");
const router = require("express").Router();
const HPImageArchive = require("@/api/HPImageArchive");
/**
 * 重定向路由
 */
router.get("/redirect/*", (req, res) => {
  HPImageArchive()
    .then(({ images }) => {
      const imgArr = images.map((item) => `https://cn.bing.com${item.url}`);
      res.redirect(imgArr[0]);
    })
    .catch((err) => {
      res.statusCode(500);
    });
  useLog(JSON.stringify(req.path.replace(/^\/redirect/, "")));
});
module.exports = router;
