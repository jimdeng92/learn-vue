const path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  devServer: {
    // contentBase: path.join(__dirname, '/'), // 静态文件根目录
    compress: false, // 不压缩
    port: 8000,
    publicPath: '/dist/' // 虚拟打包路径
  }
}
