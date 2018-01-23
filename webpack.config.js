const path = require('path');
const UglifyJSPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = {
  // JavaScript 执行入口文件
  entry: './src/index.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'index.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    // 压缩输出的 JS 代码
    new UglifyJSPlugin({
      compress: {
        // 在UglifyJs删除没有用到的代码时不输出警告
        warnings: false,
        // 删除所有的 `console` 语句，可以兼容ie浏览器
        drop_console: true,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      },
      output: {
        // 最紧凑的输出
        beautify: false,
        // 删除所有的注释
        comments: false,
      }
    }),
  ],
};