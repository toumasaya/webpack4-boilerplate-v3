const paths = require('../paths')

exports.devServer = ({ host, port } = {}) => ({
  devServer: {
    // historyApiFallback: true,
    // static: paths.public,
    stats: 'errors-only',
    host, // Defaults to `localhost`
    port, // Defaults to 8080
    open: true,
    overlay: true,
    hot: true,
    compress: true,
  },
})
