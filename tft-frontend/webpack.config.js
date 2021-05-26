const path = require('path');
const webpack = require('webpack');
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    entry: './main.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {},
                exclude: ['/node_modules'],
            },
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            }
        ],
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve('src'),
        }
    },
    plugin: [
        new VueLoaderPlugin()
    ]
};