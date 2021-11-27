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

const webpack = require('webpack')
const GitRevisionPlugin = require('git-revision-webpack-plugin')

exports.attachRevision = () => ({
  plugins: [
    new webpack.BannerPlugin({
      banner: new GitRevisionPlugin().version(),
    }),
  ],
})
