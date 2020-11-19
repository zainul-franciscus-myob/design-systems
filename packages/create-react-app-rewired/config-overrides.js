const TreatPlugin = require("treat/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


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
