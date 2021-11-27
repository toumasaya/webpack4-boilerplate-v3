// eslint-disable-next-line prefer-destructuring
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

exports.bundleAnalyzer = ({ options }) => ({
  plugins: [
    new BundleAnalyzerPlugin({
      options,
    }),
  ],
})

const SizePlugin = require('size-plugin')

exports.sizePlugin = () => ({
  plugins: [new SizePlugin()],
})
