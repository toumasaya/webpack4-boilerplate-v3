const { merge } = require('webpack-merge')
const webpack = require('webpack')
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin')

const paths = require('./paths')
const partsDev = require('./parts/parts.dev')
const partsAssets = require('./parts/parts.assets')

const devConfig = merge([
  {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [new webpack.HotModuleReplacementPlugin(), new ErrorOverlayPlugin()],
  },
  // merge other parts
  partsDev.devServer({
    host: process.env.HOST,
    port: 9527,
  }),
  partsAssets.loadCSS(),
  partsAssets.loadImages({
    options: {
      limit: 8192,
      fallback: require.resolve('file-loader'),
      name: 'images/[path][name].[ext]',
      context: paths.src + '/images',
    },
  }),
])

module.exports = devConfig
