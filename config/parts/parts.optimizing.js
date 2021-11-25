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
