const { merge } = require('webpack-merge')
const webpack = require('webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')
const parts = require('./parts/parts.dev')

const devConfig = merge([
  {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],
  },
  // merge other parts
  parts.devServer({
    host: process.env.HOST,
    port: 9527,
  }),
])

module.exports = devConfig
