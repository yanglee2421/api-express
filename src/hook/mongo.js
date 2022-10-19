const mongoose = require("mongoose");
const p = new Promise((resolve, reject) => {
  mongoose.connect("mongodb://localhost:27017/test", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  mongoose.connection.on("open", (err) => {
    resolve(err ? err : "数据库连接成功");
  });
  mongoose.connection.on("close", (err) => {
    reject("数据库连接失败");
  });
});
p.then((res) => {
  console.log(res);
  const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      default: "张三",
    },
    age: {
      type: Number,
      default: 18,
    },
  });
  return mongoose.model("person", studentSchema);
}).then((res) => {
  const a = res;
});
