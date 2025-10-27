const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PROJECT_FOLDER_NAME = 'restaurantPage';
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, `../../docs/${PROJECT_FOLDER_NAME}`),
        publicPath: isProduction
            ? `/theOdinProject/${PROJECT_FOLDER_NAME}/`
            : '/',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The Loop Restaurant',
            template: './src/template.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
    ],

    devtool: isProduction ? 'source-map' : 'inline-source-map',

    devServer: {
        port: 8082,

        devMiddleware: { publicPath: '/' },

        static: {
            directory: path.resolve(__dirname, './'),
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
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
