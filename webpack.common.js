const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
    target: "web",

    entry: {
        app: "./src/index.tsx",
    },
    plugins: [
        new CleanWebpackPlugin(),
        new Dotenv({
            path: `./.${process.env.NODE_ENV}.env`,
        }),
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            "@babel/preset-env",
                            "@babel/preset-react",
                            "@babel/preset-typescript",
                        ],
                    },
                },
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.s[a|c]ss$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader",
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            esModule: false,
                            limit: 8192,
                        }
                    },
                ],
                type: 'javascript/auto'
            },
            {
                test: /\.(mp4|webm|ogg|swf|ogv|ttf)$/,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            }
        ],
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss', '.ts', '.tsx'],
        alias: {
            "src": path.resolve(__dirname, 'src'),
        },
    }
};
