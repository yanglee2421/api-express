import { DataSource } from "typeorm";
import path from "path";
import { User } from "../../entity";
const dataSource = new DataSource({
  type: "sqlite",
  database: path.resolve(__dirname, "../../../data/sqlite.sqlite"),
  entities: [User],
});
export default () => dataSource;
