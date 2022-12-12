const cors = require("cors");
const express = require("express");
const router = express.Router();
const { sign } = require("@/hook/useJWT");
router
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .post("/login", (req, res) => {
    const { user, pwd } = req.body;
    if ((user === "admin", pwd === "admin")) {
      const token = sign({ user, pwd });
      res.json({ isPass: true, res: token });
      return;
    }
    res.json({ isPass: false, res: "用户名或密码错误" });
  });
module.exports = router;
