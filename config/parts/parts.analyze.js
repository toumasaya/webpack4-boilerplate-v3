// eslint-disable-next-line prefer-destructuring
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

exports.bundleAnalyzer = ({ options }) => ({
  plugins: [
    new BundleAnalyzerPlugin({
      options,
    }),
  ],
})
