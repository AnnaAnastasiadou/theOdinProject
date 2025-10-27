const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '/theOdinProject/JavaScript/todoList/dist/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'TaskFlow Todo App',
            template: './index.html',
        }),
    ],
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
};
