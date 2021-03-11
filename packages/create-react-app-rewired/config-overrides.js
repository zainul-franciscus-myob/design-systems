const TreatPlugin = require("treat/webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function (config, env) {

    const devPlugin = {
        hmr: process.env.NODE_ENV === "development",
        localIdentName: '_[name]-[local]_[hash:base64:5]',
        themeIdentName: '__[name]-[local]_[hash:base64:4]',
    };

    const prodPlugin = {
        outputLoaders: [
            {
                loader: MiniCssExtractPlugin.loader,
                options: {
                    hmr: process.env.NODE_ENV === "development",
                    reloadAll: true, // Required for treat HMR to work
                },
            },

        ], ...devPlugin
    };

    config.plugins = [
        new TreatPlugin(prodPlugin),
        new MiniCssExtractPlugin(),
    ].concat(config.plugins);


    config.module = {rules:[
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        '@babel/preset-env',
                        '@babel/react',
                    ],
                    plugins: [
                        ["@babel/plugin-proposal-class-properties",
                            {
                                "loose": true
                            }]
                    ]
                }
            }
        ]};

    console.log('rules ---> ',config.module);

    return config;
}
;
