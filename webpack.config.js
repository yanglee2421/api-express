const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    extensions: [".ts", ".tsx"], // 配置ts文件可以作为模块加载
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, // .ts或者tsx后缀的文件，就是typescript文件
        use: "ts-loader", // 就是上面安装的ts-loader
        exclude: "/node-modules/",
      },
      {
        test: /\.(jpg|png|gif|pdf|sqlite3)$/,
        type: "asset/resource",
      },
    ],
  },
  externals: [nodeExternals()],
};
