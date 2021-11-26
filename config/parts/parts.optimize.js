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
