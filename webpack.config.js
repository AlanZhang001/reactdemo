var webpack = require("webpack");

var fs = require("fs");
var path = require("path");

/**
 * [fetchPath 提取出./demoXXX/index.jsx的路径组装成entry
 *  此处的map对象，为了使打包的文件能在各自的目录下，需要配置entryMap的key为具体的路径加上js文件名称，
 *  再配置output.fileName时使用此名称即可
 *  参考：http://webpack.toobug.net/zh-cn/chapter3/config.html
 * ]
 * @return {[type]} [description]
 */
function fetchDemoJsx(dirpath) {
    'use strict';
    var entryMap = {};
    fs.readdirSync(dirpath).map(function (file) {
        return path.join(dirpath, file);
    }).filter(function (file) {
        return /demo\d+_/gi.test(file) && fs.statSync(file).isDirectory();
    }).forEach(function (dir) {
        var filePath = path.join(dir, "index.jsx");

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
            entryMap[dir + "/index"] = filePath;
        }
    });

    return entryMap;
}

module.exports = {
    entry: fetchDemoJsx(__dirname),
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    output: {
        libraryTarget: 'umd',
        filename: '[name]Main.js'
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
    // 将react和reactdom从打包文件中分离出来，使react可缓存使用，同时减小打包文件的大小；
    // 在页面通过script引入相关js，在js中使用时不在需要require这些js;
    // 这里配置相当于做了这样一个操作:module.exports = window.React;module.exports = window.ReactDOM;
    externals:{
        "React": "react",
        "ReactDOM": "react-dom",
    },
    // devtool: "#source-map",
    watch: false
};