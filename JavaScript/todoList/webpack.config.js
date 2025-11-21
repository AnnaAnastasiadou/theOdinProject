const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../../docs/todoList'),
        clean: true,
        publicPath: isProduction ? '/theOdinProject/todoList/' : '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TaskFlow Todo App',
            template: './index.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        port: 8081,

        static: {
            directory: path.resolve(__dirname, './'),
            publicPath: '/',
        },

        devMiddleware: {
            publicPath: '/',
        },
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
