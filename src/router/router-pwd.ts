import { useDB } from "@/hook";
import { Like } from "typeorm";
import { Pwd } from "@/hook/useDB/entity";
import { Router } from "express";
const router = Router();
export default router;
useDB((db) => {
  router.get("/query", (req, res) => {
    const {
      pwd_site = "",
      pwd_username = "",
      page_index = 1,
      page_size = 20,
    } = req.query as Record<string, string>;
    const query = {
      pwd_site: Like(`%${pwd_site}%`),
      pwd_username: Like(`%${pwd_username}%`),
    };
    const pagination = {
      pageIndex: +page_index || 1,
      pageSize: +page_size || 20,
      total: 0,
    };
    db.manager
      .count(Pwd, { where: [query], skip: (+page_index - 1) * +page_size })
      .then((total) => {
        pagination.total = total;
        return db.manager.find(Pwd, {
          where: [query],
          skip: (pagination.pageIndex - 1) * pagination.pageSize,
          take: pagination.pageSize,
        });
      })
      .then((rRes) => {
        res.json({ isOk: true, rows: rRes, total: pagination.total });
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
