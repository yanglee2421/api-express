import { DataSource } from "typeorm";
const dataSource = new DataSource({
  type: "sqlite",
  database: __dirname + "/database.sqlite",
  entities: [__dirname + "/entity/**.ts"],
});
export default (callback: (db: DataSource) => void) => {
  dataSource.initialize().then(callback);
};
