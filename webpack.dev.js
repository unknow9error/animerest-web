const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const webpack = require('webpack');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    devServer: {
        devMiddleware: {
            stats: 'minimal',
        },
        port: process.env.PORT || 3000,
        compress: true,
        allowedHosts: 'all',
        historyApiFallback: true,
        static: './public',
        proxy: {
            '/api': {
                target: "http://localhost:8080"
            }
        },
        hot: true
    },
    plugins:
        [
            new webpack.HotModuleReplacementPlugin()
        ]
});
