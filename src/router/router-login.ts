import { Router } from "express";
import { useSign } from "@/hook/useJWT";
import { useDB } from "@/hook";
import { User } from "@/hook/useDB/entity";
const router = Router();
export default router;
useDB((db) => {
  // 登录接口
  router.post("/login", (req, res) => {
    const { password = "", username = "" } = req.body as Record<string, string>;
    db.manager.find(User, { where: [{ user_name: username }] }).then((qRes) => {
      if (qRes.find((item) => item.user_pwd === password)) {
        const token = useSign({ username, password });
        res.json({
          isOk: true,
          token,
          username,
          invalidTime: Date.now() + 1000 * 3600 * 24 * 7,
        });
        return;
      }
      res.json({ isOk: false, mes: "用户名或密码错误" });
    });
  });
  // 注册接口
  router.post("/register", (req, res) => {
    const { password = "", username = "" } = req.body as Record<string, string>;
    db.manager.find(User, { where: [{ user_name: username }] }).then((qRes) => {
      if (qRes.length) {
        res.json({ isOk: false, mes: "用户已存在！" });
        return;
      }
      const user = new User();
      user.user_name = username;
      user.user_pwd = password;
      db.manager.save([user]).then((sRes) => {
        if (sRes.length) {
          res.json({ isOk: true, mes: "注册成功！" });
          return;
        }
      });
    });
  });
  // 查询所有用户
  router.get("/query", (req, res) => {
    db.manager
      .find(User)
      .then((rRes) => {
        res.json({ isOk: true, data: rRes });
      })
      .catch((err) => {
        console.error(err);
        res.json({ isOk: false, mes: "系统内部错误" });
      });
  });
  // 删除某个用户
  router.delete("/del/:id", (req, res) => {
    const { id = "" } = req.params;
    db.manager
      .findOne(User, { where: [{ user_id: id }] })
      .then((rRes) => {
        if (!rRes) {
          res.json({ isOk: false, mes: "没有这个元素" });
          return;
        }
        return db.manager.remove(User, rRes);
      })
      .then((dRes) => {
        if (!dRes) return;
        res.json({ isOk: true, rows: [dRes] });
      })
      .catch((err) => {
        console.error(err);
        res.json({ isOk: false, mes: "系统内部错误" });
      });
  });
});
