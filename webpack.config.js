const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

const IS_DEVELOPMENT = process.env.NODE_ENV === "dev";

const jsPath = "./src";
const scssPath = "./src/style";
const outputPath = "./dist";
const entryPoints = {
  app: jsPath + "/index.js",
  style: scssPath + "/index.scss",
};

module.exports = {
  entry: entryPoints,
  devtool: "inline-source-map",

  output: {
    path: path.resolve(__dirname, outputPath),
    filename: "[name].js",
  },

  resolve: {
    extensions: ["", ".js"],
    alias: {
      global: path.resolve(__dirname, jsPath),
    },
  },

  plugins: [
    new webpack.DefinePlugin({
      IS_DEVELOPMENT,
    }),

    new MiniCssExtractPlugin({
      filename: "app.css",
    }),

    new CopyPlugin({
      patterns: [
        {
          from: "public/**/*",
          to: "[name][ext]",
          force: true,
        },
      ],
    }),

    new webpack.ProvidePlugin({
      globals: "globals",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },

      {
        test: /\.glsl$/,
        loader: "webpack-glsl-loader",
      },

      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "",
            },
          },
          {
            loader: "css-loader",
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require("autoprefixer")];
                },
              },
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
};
