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
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file?name=assets/[name].[hash].[ext]'
            },
            //{
            //    test: /\.css$/,
            //    exclude: helpers.root('src', 'app'),
            //    loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            //},
            //{
            //    test: /\.css$/,
            //    include: helpers.root('src', 'app'),
            //    loader: 'raw'
            //}
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

        new CombileCssWebpackPlugin({
            source: __dirname + '/../src/common/css/style.css',
            target: path.join(distPath, 'app.css'),
            useMinify: false
        })
    ]
};