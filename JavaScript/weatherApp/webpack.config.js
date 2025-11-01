const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, '../../docs/weatherApp'),
        clean: true,
        publicPath: isProduction ? '/theOdinProject/weatherApp/' : '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Weather App',
            template: './src/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: './src/style.css',
        }),
    ],
    devtool: isProduction ? 'source-map' : 'eval-cheap-module-source-map',
    devServer: {
        port: 8084,

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
