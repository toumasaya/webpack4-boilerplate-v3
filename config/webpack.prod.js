const { merge } = require('webpack-merge')
const globAll = require('glob-all')

const paths = require('./paths')
const partsAssets = require('./parts/parts.assets')
const partsOptimize = require('./parts/parts.optimize')

const prodConfig = merge([
  {
    mode: 'production',
    devtool: false,
    output: {
      path: paths.build,
      // publicPath: '/',
      filename: 'js/[name].[contenthash:5].js',
      chunkFilename: 'js/[name].[contenthash:5].js',
    },
  },
  {
    optimization: {
      flagIncludedChunks: true,
      moduleIds: 'hashed',
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial',
          },
        },
      },
      runtimeChunk: {
        name: 'manifest',
      },
    },
    performance: {
      hints: 'warning', // or false
      maxEntrypointSize: 512000,
      maxAssetSize: 512000,
    },
  },
  partsOptimize.minifyJavaScript(),
  partsOptimize.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      safe: true,
    },
  }),
  partsAssets.extractCSS({
    use: ['css-loader', 'postcss-loader', 'sass-loader'],
  }),
  partsOptimize.purifyCSS({
    paths: globAll.sync([paths.src + '/**/*'], {
      nodir: true,
    }),
  }),
])

module.exports = prodConfig
