/**
 * === JavaScript
 */
const TerserPlugin = require('terser-webpack-plugin')

exports.minifyJavaScript = () => ({
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: true,
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            drop_console: true,
          },
        },
        extractComments: false,
      }),
    ],
  },
})

/**
 * === Css
 */
const PurgecssPlugin = require('purgecss-webpack-plugin')

exports.purifyCSS = ({ paths }) => ({
  plugins: [
    new PurgecssPlugin({
      paths,
    }),
  ],
})

const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const cssnano = require('cssnano')

exports.minifyCSS = ({ options }) => ({
  plugins: [
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: options,
      canPrint: false,
    }),
  ],
})
