var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CombileCssWebpackPlugin = require('combine-css-webpack-plugin');
var helpers = require('./helpers');
var path = require('path');
var fs = require('fs');
var distPath = __dirname + '/../dist/'


module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts',
    },

    output: {
        path: './dist',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts'
            },
            {
                test: /\.html$/,
                loader: 'html'
            },
            {
                test: /\.(png|jpe?g|gif|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                loader: 'file?name=fonts/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),


        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new ExtractTextPlugin("[name].css"),



        //new CombileCssWebpackPlugin({
        //    source: __dirname + '/../src/common/css/style.css',
        //    target: path.join(distPath, 'app.css'),
        //    useMinify: false
        //})
    ]
};