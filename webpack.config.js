const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "production",
  target: "node",
  entry: "./src/main.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    clean: true,
  },
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    extensions: [".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.m?jsx?$/,
        exclude: "/node_modules/",
        use: [
          {
            loader: "babel-loader",
            options: { presets: ["@babel/preset-env"] },
          },
        ],
      },
      {
        test: /\.tsx?$/,
        exclude: "/node_modules/",
        use: "ts-loader",
      },
    ],
  },
  externals: [nodeExternals()],
};
