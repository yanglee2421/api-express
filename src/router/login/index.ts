import { Router } from "express";
import { useSign } from "@/hook/useJWT";
const router = Router();
router.post("/login", (req, res) => {
  const { password, username } = req.body;
  if (username === "admin" && password === "admin") {
    const token = useSign({ username, password });
    res.json({
      isPass: true,
      token,
      username: "admin",
      invalidTime: Date.now() + 1000 * 60 * 60 * 10,
    });
    return;
  }
  res.json({ isPass: false, mes: "用户名或密码错误" });
});
export default router;
