const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const glob = require('glob')

const paths = require('./paths')
const partsAssets = require('./parts/parts.assets')
const partsAnalyze = require('./parts/parts.analyze')

const commonConfig = merge([
  {
    mode: 'none',
    entry: {
      main: paths.src + '/index.js',
      normal: paths.src + '/js/normal.js',
    },
    plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: paths.public,
            to: 'assets',
            globOptions: {
              ignore: ['*.DS_Store'],
            },
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    resolve: {
      modules: [paths.src, 'node_modules'],
      extensions: ['.js', '.jsx', '.json'],
      alias: {
        '@': paths.src,
      },
    },
  },
  partsAssets.loadPug({
    options: {
      pretty: true,
    },
  }),
  partsAnalyze.bundleAnalyzer({
    analyzerMode: 'server',
    analyzerPort: 8888,
    openAnalyzer: true,
  }),
  partsAnalyze.sizePlugin(),
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
      chunks: chunkConfig,
      minify: {
        removeScriptTypeAttributes: true,
      },
    })
  )
})

module.exports = commonConfig
