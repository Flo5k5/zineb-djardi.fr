const { merge } = require("webpack-merge");
const path = require("path");
const config = require("./webpack.config");

const dist = path.resolve(__dirname, "dist");

module.exports = merge(config, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    devMiddleware: {
      writeToDisk: true,
    },
    static: dist,
  },
  output: {
    path: dist,
  },
});
