var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: path.resolve(__dirname, 'src'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js?/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader'
            },
            {
                loader: ExtractTextPlugin.extract({
                    loader: 'css-loader',
                }),
                test: /\.css$/,
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
    ],
};

module.exports = config;
