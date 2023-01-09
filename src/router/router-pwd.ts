import { Router } from "express";
import { Like } from "typeorm";
import { useDB } from "@/hook";
import { Pwd } from "@/hook/useDB/entity";
export const pwd = Router();
useDB((db) => {
  pwd.get("/query", (req, res) => {
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
    const pagi = {
      index: +page_index || 1,
      size: +page_size || 20,
      total: 0,
    };
    db.manager
      .count(Pwd, { where: [query], skip: (pagi.index - 1) * pagi.size })
      .then((total) => {
        pagi.total = total;
        return db.manager.find(Pwd, {
          where: [query],
          skip: (pagi.index - 1) * pagi.size,
          take: pagi.size,
        });
      })
      .then((rows) => res.json({ isOk: true, rows, total: pagi.total }))
      .catch(({ message }) => res.json({ isOk: false, message }));
  });
  pwd.post("/save", (req, res) => {
    const { pwd_site, pwd_username, pwd_pwd } = req.body;
    const pwd = new Pwd();
    pwd.pwd_site = pwd_site;
    pwd.pwd_username = pwd_username;
    pwd.pwd_pwd = pwd_pwd;
    db.manager
      .save(Pwd, pwd)
      .then((rows) => res.json({ isOk: true, rows }))
      .catch(({ message }) => res.json({ isOk: false, message }));
  });
  pwd.get("/query/:id", (req, res) => {
    const { id } = req.params;
    db.manager
      .findOneByOrFail(Pwd, { pwd_id: id })
      .then((data) => res.json({ isOk: true, data }))
      .catch(({ message }) => res.json({ isOk: false, message }));
  });
  pwd.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    db.manager
      .findOneByOrFail(Pwd, { pwd_id: id })
      .then((rRes) => db.manager.remove(Pwd, rRes))
      .then((data) => res.json({ isOk: true, data }))
      .catch(({ message }) => res.json({ isOk: false, message }));
  });
});
