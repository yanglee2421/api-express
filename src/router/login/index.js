const router = require("express").Router();
const { key } = require("@/hook/useSecretKey")();
const jwt = require("jsonwebtoken");
router.post("/login", (req, res) => {
  const { user, pwd } = req.body;
  if ((user === "admin", pwd === "admin")) {
    const token = jwt.sign({ user: "admin", pwd: "admin" }, key, {
      algorithm: "HS256",
    });
    res.json({ isPass: true, res: token });
    return;
  }
  res.json({ isPass: false, res: "用户名或密码错误" });
});
module.exports = router;
