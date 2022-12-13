import { DataSource } from "typeorm";
const dataSouce = new DataSource({
  type: "sqlite",
  database: "../../../data/sqlite.sqlite",
});
export default dataSouce.initialize();
