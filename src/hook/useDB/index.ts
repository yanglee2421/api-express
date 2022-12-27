import { DataSource } from "typeorm";
import User from "./entity/User";
const dataSource = new DataSource({
  type: "sqlite",
  database: "C:\\Users\\xtcff\\Desktop\\AdGuard\\database.sqlite3",
  entities: [User],
});
export default (callback: (db: DataSource) => void) => {
  dataSource.initialize().then(callback);
};
