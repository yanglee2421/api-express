import { DataSource } from "typeorm";
import { Pwd, User } from "./entity";
const dataSource = new DataSource({
  type: "sqlite",
  database: "C:\\Users\\xtcff\\Desktop\\AdGuard\\database.sqlite3",
  entities: [Pwd, User],
});
export default (callback: (db: DataSource) => void) => {
  dataSource
    .initialize()
    .then(callback)
    .catch((err) => {
      console.error("数据库连接异常");
      console.error(err);
    });
};
