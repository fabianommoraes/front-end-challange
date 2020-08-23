const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/js/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
  },
  devServer: {
    contentBase: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            // options: {
            //   hmr: process.env.NODE_ENV === "development",
            // },
          },
          "css-loader",
          // "postcss-loader",
          "sass-loader",
        ],
      },
      // {
      //   test: /\.scss$/i,
      //   use: ["style-loader", "css-loader", "sass-loader"],
      //   // use: [MiniCssExtractPlugin.loader, "sass-loader"],
      // },
      // {
      //   test: /\.css$/i,
      //   use: [MiniCssExtractPlugin.loader, "css-loader"],
      // },
      {
        test: /\.jpg$/,
        loader: "file-loader",
      },
      {
        test: /\.png$/,
        loader: "file-loader",
      },
    ],
  },
};
