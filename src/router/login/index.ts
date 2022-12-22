import cors from "cors";
import express, { Router } from "express";
import { useSign } from "@/hook/useJWT";
const router = Router();
router
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .post("/login", (req, res) => {
    const { user, pwd } = req.body;
    if (user === "admin" && pwd === "admin") {
      const token = useSign({ user, pwd });
      res.json({ isPass: true, res: token });
      return;
    }
    res.json({ isPass: false, res: "用户名或密码错误" });
  });
export default router;
