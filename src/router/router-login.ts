import { Router } from "express";
import { useDB, useSign } from "@/hook";
import { User } from "@/hook/useDB/entity";
export const login = Router();
useDB((db) => {
  // 登录接口
  login.post("/login", (req, res) => {
    const { password = "", username = "" } = req.body as Record<string, string>;
    db.manager
      .find(User, { where: [{ user_name: username }] })
      .then((qRes) => {
        const isPassed = qRes.some((item) => item.user_pwd === password);
        if (!isPassed) throw "用户名或密码错误";
        res.json({
          isOk: true,
          token: useSign({ username, password }),
          username,
          invalidTime: Date.now() + 1000 * 3600 * 24 * 7,
        });
      })
      .catch((mes) => res.json({ isOk: false, mes }));
  });
  // 注册接口
  login.post("/register", (req, res) => {
    const { password = "", username = "" } = req.body as Record<string, string>;
    db.manager
      .find(User, { where: [{ user_name: username }] })
      .then((qRes) => {
        if (qRes.length) throw "用户已存在";
        const user = new User();
        user.user_name = username;
        user.user_pwd = password;
        return db.manager.save([user]);
      })
      .then((data) => res.json({ isOk: true, data, mes: "注册成功" }))
      .catch((mes) => res.json({ isOk: false, mes }));
  });
  // 查询所有用户
  login.get("/query", (req, res) => {
    db.manager
      .find(User)
      .then((data) => res.json({ isOk: true, data }))
      .catch((mes) => res.json({ isOk: false, mes }));
  });
  // 删除某个用户
  login.delete("/del/:id", (req, res) => {
    const { id = "" } = req.params;
    db.manager
      .find(User, { where: [{ user_id: id }] })
      .then((rRes) => db.manager.remove(User, rRes))
      .then((rows) => res.json({ isOk: true, rows }))
      .catch((mes) => res.json({ isOk: false, mes }));
  });
});
