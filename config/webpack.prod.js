const { merge } = require('webpack-merge')

const paths = require('./paths')

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
])

module.exports = prodConfig
