import { useDB } from "@/hook";
import { Pwd } from "@/hook/useDB/entity";
import { Router } from "express";
const router = Router();
export default router;
useDB((db) => {
  router.get("/query", (req, res) => {
    db.manager
      .find(Pwd)
      .then((rRes) => {
        res.json({ isOk: true, data: rRes });
      })
      .catch((err) => {
        console.error(err);
        res.json({ isOk: false, mes: "数据库出了一点问题" });
      });
  });
  router.get("/query/:id", (req, res) => {
    const { id } = req.params;
    db.manager
      .findOne(Pwd, { where: [{ pwd_id: id }] })
      .then((rRes) => {
        if (rRes) {
          res.json({ isOk: true, data: rRes });
          return;
        }
        res.json({ isOk: false, mes: "查无此条" });
      })
      .catch((err) => {
        console.error(err);
        res.json({ isOk: false, mes: "数据库出了一点问题" });
      });
  });
  router.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    db.manager
      .findOne(Pwd, { where: [{ pwd_id: id }] })
      .then((rRes) => {
        return db.manager.remove(Pwd, rRes);
      })
      .then((dRes) => {
        res.json({ isOk: true, data: dRes });
      })
      .catch((err) => {
        console.error(err);
        res.json({ isOk: false, mes: "数据库出了一点问题" });
      });
  });
  router.post("/save", (req, res) => {
    const { pwd_site, pwd_username, pwd_pwd } = req.body;
    const pwd = new Pwd();
    pwd.pwd_site = pwd_site;
    pwd.pwd_username = pwd_username;
    pwd.pwd_pwd = pwd_pwd;
    db.manager
      .save(Pwd, [pwd])
      .then((sRes) => {
        res.json({ isOk: true, data: sRes });
      })
      .catch((err) => {
        console.error(err);
        res.json({ isOk: false, mes: "数据库出了一点问题" });
      });
  });
});
