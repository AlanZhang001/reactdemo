// var webpack = require("webpack");

var fs = require("fs");
var path = require("path");

var entryMap = {};

fs.readdir(__dirname, function (err, files) {

    files.forEach(function(dir, index) {

        if (fs.stat(path.join(__dirname,dir)).isDirectory() && dir.filename.indexOf("demo") > -1) {

            // fs.readdir(dir, function(err, files) {
            //     files.forEach (function(file) {
            //         if (fs.stat(file).isFile() && /\.jsx&/gi.test(file.filename)) {
            //             entryMap[file.filename] = path.join(__dirname, dir.filename, file.filename);
            //         }
            //     });
            // });

        }
    });
});

console.log(entryMap);

/**
 * [fetchPath 提取出./demoXXX/index.jsx的路径组装成entry]
 * @return {[type]} [description]
 */
var fetchPath = function () {
    'use strict';

    return {
        indexMain: './demo2_jsx/index.jsx'
    };
};

module.exports = {
    entry: fetchPath(),
    plugins: [],
    output: {
        libraryTarget: 'umd',
        filename: '[name].js'
    },
    resolve: {
        modulesDirectories: ["./node_modules"]
    },
    //加载器配置
    module: {
        loaders: [
            //.css 文件使用 style-loader 和 css-loader 来处理
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            //.js 文件使用 jsx-loader 来编译处理
            {
                test: /\.js$/,
                loader: 'jsx-loader?harmony'
            },
            //.scss 文件使用 style-loader、css-loader 和 sass-loader 来编译处理
            {
                test: /\.scss$/,
                loader: 'style!css!sass?sourceMap'
            },
            //图片文件使用 url-loader 来处理，小于8kb的直接转为base64
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    watch: false
};