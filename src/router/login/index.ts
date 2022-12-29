import { Router } from "express";
import { useSign } from "@/hook/useJWT";
import { useDB } from "@/hook";
import User from "@/hook/useDB/entity/User";
const router = Router();
useDB((db) => {
  router.post("/login", (req, res) => {
    const { password, username } = req.body as Record<string, string>;
    db.manager.find(User, { where: [{ user_name: username }] }).then((qRes) => {
      if (qRes.find((item) => item.user_pwd === password)) {
        const token = useSign({ username, password });
        res.json({
          isPass: true,
          token,
          username,
          invalidTime: Date.now() + 1000 * 60 * 60 * 10,
        });
        return;
      }
      res.json({ isPass: false, mes: "用户名或密码错误" });
    });
  });
  router.post("/register", (req, res) => {
    const { password, username } = req.body as Record<string, string>;
    db.manager.find(User, { where: [{ user_name: username }] }).then((qRes) => {
      if (qRes.length) {
        res.json({ isPassed: false, mes: "用户已存在！" });
        return;
      }
      const user = new User();
      user.user_name = username;
      user.user_pwd = password;
      db.manager.save([user]).then((sRes) => {
        if (sRes.length) {
          res.json({ isPassed: true, mes: "注册成功！" });
          return;
        }
      });
    });
  });
});
export default router;
