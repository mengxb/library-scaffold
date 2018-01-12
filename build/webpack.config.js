const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const path = require('path')
const env = require('yargs').argv.env

let libraryName = 'library'
let libraryFileName = 'library'
let plugins = []
let outputFile
let resolve = dir => {
  return path.join(__dirname, '..', dir)
}

if (env === 'build') {
  plugins.push(new UglifyJsPlugin({ minimize: true }))
  outputFile = libraryFileName + '.min.js'
} else {
  outputFile = libraryFileName + '.js'
}

const config = {
  entry: resolve('/src/index.js'),
  devtool: 'source-map',
  output: {
    path: resolve('/lib'),
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        enforce: 'pre',
        loader: 'eslint-loader',
        include: [resolve('src')],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: resolve('play')
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.json', '.js']
  },
  plugins: plugins
}

module.exports = config
