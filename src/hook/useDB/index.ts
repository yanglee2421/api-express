import path from "node:path";
import { DataSource } from "typeorm";
import { Pwd, User, Joke } from "./entity";

const dataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../database.sqlite3"),
  entities: [Pwd, User, Joke],
});
export function useDB(callback: (db: DataSource) => void) {
  dataSource
    .initialize()
    .then(callback)
    .catch((err) => {
      console.error("数据库连接异常");
      console.error(err);
    });
}
