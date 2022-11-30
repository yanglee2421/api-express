const router = require("express").Router();
const HPImageArchive = require("../../api/HPImageArchive");
/**
 * 代理必应每日壁纸接口
 */
router.get("/bing", (req, res) => {
  const { idx = 0, n = 1 } = req.query;
  HPImageArchive({ idx, n }).then(({ images }) => {
    res.json(images.map((item) => `https://cn.bing.com${item.url}`));
  });
});
module.exports = router;
