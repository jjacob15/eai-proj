/**
 * Created by Jaison.Jacob on 7/9/2018.
 */
const webpack = require("webpack");
const path = require('path');
const glob = require("glob")

const BUILD_DIR = path.resolve(__dirname, 'build');
const APP_DIR = path.resolve(__dirname, 'src');

const config = {
    entry: {
        app: ['babel-polyfill' ,APP_DIR + "/Root.js"] ,
    },
    output: {
        path: BUILD_DIR,
        filename: "./app.js",
    },
    devtool: "source-map",
    mode: 'development',
    module: {
        rules: [
            {
                test: /.jsx?$/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: ["env", "react", "stage-2"]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [
                    {loader: "style-loader/useable"},
                    {loader: "css-loader"},
                ],
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    {loader: "style-loader/useable"},
                    {loader: "css-loader"},
                    {loader: 'postcss-loader'},
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: glob.sync('node_modules').map((d) => path.join(__dirname, d))
                        }
                    }

                ]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: '../assets/image/[name].[ext]'
                    }
                }]
            }, {
                test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)/,
                use: [{loader: 'url-loader'}]
            }
        ]
    },
    resolve: {
        // you can now require('file') instead of require('file.coffee')
        extensions: ['.js', '.json', '.jsx'],
    },

};

module.exports = config;