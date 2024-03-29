const { merge } = require('webpack-merge')

const devConfig = require('./config/webpack.dev')
const prodConfig = require('./config/webpack.prod')
const commonConfig = require('./config/webpack.common')

module.exports = (mode) => {
  const modeConfig = mode === 'production' ? prodConfig : devConfig
  return merge(commonConfig, modeConfig, { mode })
}
