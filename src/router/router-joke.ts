import { Router } from "express";
import { useDB } from "@/hook";
import { Joke } from "@/hook/useDB/entity/entityJoke";
export const joke = Router();
useDB((db) => {
  joke.get("", (req, res) => {
    const { num = "1" } = req.query as Record<string, string>;
    const url = new URL("https://autumnfish.cn/api/joke/list");
    url.searchParams.set("num", num);
    fetch(url, { method: "get", headers: new Headers() })
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error("upstream error");
      })
      .then((data) => {
        const { code, data: rows, mes } = data;
        if (code === 200) {
          return db.manager.save(
            (rows as string[]).map((row) => {
              const joke = new Joke();
              joke.joke_text = row;
              return joke;
            })
          );
        }
        throw new Error(mes);
      })
      .then((jokes) =>
        res.json({ isOk: true, rows: jokes.map((joke) => joke.joke_text) })
      )
      .catch(({ message }) => res.json({ isOk: false, message }));
  });
});
