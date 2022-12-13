const cors = require("cors");
import express, { Router } from "express";
import { sign } from "@/hook/useJWT";
const router = Router();
router
  .use(cors())
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .post("/login", (req, res) => {
    const { user, pwd } = req.body;
    if (user === "admin" && pwd === "admin") {
      const token = sign({ user, pwd });
      res.json({ isPass: true, res: token });
      return;
    }
    res.json({ isPass: false, res: "用户名或密码错误" });
  });
export default router;
