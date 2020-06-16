const path = require("path");
const TreatPlugin = require("treat/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { peerDependencies } = require("./package.json");

module.exports = {
  entry: "./components/index.ts",
  devtool: "inline-source-map",
  mode: "none",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new TreatPlugin({
      outputLoaders: [MiniCssExtractPlugin.loader],
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    libraryTarget: "commonjs",
    path: path.resolve(__dirname, "./lib"),
    filename: "bundle.js",
  },
  externals: Object.keys(peerDependencies).reduce(
    (acc, peerDependency) => ({ ...acc, [peerDependency]: peerDependency }),
    {}
  ),
};
