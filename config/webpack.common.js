const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const glob = require('glob')

const paths = require('./paths')
const parts = require('./parts/parts.views')

const commonConfig = merge([
  {
    mode: 'none',
    entry: {
      main: paths.src + '/index.js',
      // sub: paths.src + '/js/sub.js',
      normal: paths.src + '/js/normal.js',
      // lib: paths.src + '/js/lib.js',
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
      // new HtmlWebpackPlugin({
      //   template: paths.src + '/views/index.html',
      //   filename: 'index.html',
      //   chunks: ['main'],
      //   minify: false,
      // }),
      // new HtmlWebpackPlugin({
      //   template: paths.src + '/views/about.html',
      //   filename: 'about.html',
      //   chunks: ['normal'],
      //   minify: false,
      // }),
    ],
  },
  parts.loadPug({
    options: {
      pretty: true,
    },
  }),
])

// Generates an HTML file from a template
// Generates deprecation warning: https://github.com/jantimon/html-webpack-plugin/issues/1501
// Using glob find all pug files and push to plugins
glob.sync(paths.src + '/views/*.pug').forEach((path) => {
  const start = path.indexOf('/views/') + 7
  const end = path.length - 4
  const name = path.slice(start, end)
  const chunkConfig = name === 'about' ? ['normal'] : ['main']

  commonConfig.plugins.push(
    new HtmlWebpackPlugin({
      template: paths.src + '/views/' + name + '.pug',
      filename: name + '.html',
      // chunks: ['main'],
      chunks: chunkConfig,
      // minify: false,
      minify: {
        removeScriptTypeAttributes: true,
      },
    })
  )
})

module.exports = commonConfig
