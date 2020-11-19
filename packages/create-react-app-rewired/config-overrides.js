const TreatPlugin = require("treat/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// const { override } = require("customize-cra");
// const path = require("path");

const addWebpackPlugin = (plugin) => (config) => {
  config.plugins = plugin.concat(config.plugins);
  console.log(config);
  return config;
};

// module.exports = override(
//   addWebpackPlugin([
//     new TreatPlugin({
//       // outputLoaders: [MiniCssExtractPlugin.loader],
//     }),
//     // new MiniCssExtractPlugin(),
//   ])
// );

module.exports = function (config, env) {
  config.plugins = [
    new TreatPlugin({
      hmr: process.env.NODE_ENV === "development",
      localIdentName:'_[name]-[local]_[hash:base64:5]',
      themeIdentName:'__[name]-[local]_[hash:base64:4]',
      outputLoaders: [
        {
          loader: MiniCssExtractPlugin.loader,
          options: {
            hmr: process.env.NODE_ENV === "development",
            reloadAll: true, // Required for treat HMR to work
          },
        },
      ],
    }),
  ].concat(config.plugins);
  console.log(config.plugins);
  return config;
};
