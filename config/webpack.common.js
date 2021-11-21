const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require('./paths')

const commonConfig = merge([
  {
    mode: 'none',
    entry: {
      main: paths.src + '/index.js',
      sub: paths.src + '/js/sub.js',
      normal: paths.src + '/js/normal.js',
      lib: paths.src + '/js/lib.js',
    },
    resolve: {
      modules: [paths.src, 'node_modules'],
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': paths.src,
        assets: paths.public,
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin([
        {
          from: paths.public,
          to: 'assets',
          globOptions: {
            ignore: ['*.DS_Store'],
          },
          noErrorOnMissing: true,
        },
      ]),
      new HtmlWebpackPlugin({
        template: paths.src + '/views/index.html',
        filename: 'index.html',
        chunks: ['main'],
        minify: false,
      }),
    ],
  },
])

module.exports = commonConfig
