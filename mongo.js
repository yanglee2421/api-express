/* const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.on("open", (err) => {
  console.log(err ? err : "数据库连接成功");
});
 */
const mysql = require("mysql");
const connection = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "admin",
  database: "person",
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (error, results, fields) => {
  if (error) throw error;
  console.log("---", results[0].solution);
});
