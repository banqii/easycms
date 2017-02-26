var path = require('path');
var webpack = require('webpack');
module.exports = {
  // entry 入口文件
  entry: './www/static/src/App.jsx',
  // output 编译后的js输出目录及名称
  output: {
    path: path.join(__dirname, '/www/static/build/'),
    publicPath: "/static/build/",
    filename: 'bundle.js'
  },
  plugins: [
  ],
  //resolve 指定可以被 import 的文件后缀
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
  //loaders 指定 babel编译后缀名为 .js 或者 .jsx 的文件
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        // query 指定babel的一些插件等
        query: {
          presets: ['react', 'es2015-loose', 'stage-1'],
          plugins: ['transform-runtime']
        },
        exclude: /node_modules/
      }
//       ,
//       {
// 　　　　test: /\.(png|jpg)$/,
// 　　　　loader: 'file-loader?limit=25000'
// 　　　}
    ]
  }
}