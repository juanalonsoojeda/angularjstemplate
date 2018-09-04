'use strict';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

var isProd = process.env.npm_lifecycle_event === 'build';

function makeWebpackConfig() {
    var config = {};

    config.entry = { app: './src/app/bootstrap.js' };

    config.output = {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: isProd ? '[name].[hash].js' : '[name].bundle.js',
        chunkFilename: isProd ? '[name].[hash].js' : '[name].bundle.js'
    };

    config.module = {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.html$/,
            loader: 'raw-loader'
        }]
    };

    config.plugins = [new HtmlWebpackPlugin({
        template: './src/public/index.html',
        inject: 'body'
    })];

    if (isProd) {
        config.plugins.push(
            new webpack.optimize.UglifyJsPlugin(),
            new CopyWebpackPlugin([{
                from: __dirname + '/src/public'
            }])
        );
    }

    config.devtool = isProd ? 'source-map' : 'eval-source-map';

    config.devServer = {
        contentBase: './src/public',
        stats: 'minimal',
        host: '0.0.0.0'
    };

    return config;
}

export default makeWebpackConfig;
