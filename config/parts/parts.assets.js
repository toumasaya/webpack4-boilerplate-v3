/**
 * === Pug
 */
exports.loadPug = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(pug)$/,
        include,
        exclude,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: false,
              attributes: {
                list: [
                  '...', // important, to correctly handle the default tags like 'src'
                  {
                    tag: 'img',
                    attribute: 'srcset',
                    type: 'srcset',
                  },
                  {
                    tag: 'source',
                    attribute: 'data-srcset',
                    type: 'srcset',
                  },
                  {
                    tag: 'img',
                    attribute: 'data-src',
                    type: 'src',
                  },
                  {
                    tag: 'img',
                    attribute: 'data-srcset',
                    type: 'srcset',
                  },
                ],
              },
            },
          },
          {
            loader: 'pug-html-loader',
            options,
          },
        ],
      },
    ],
  },
})

/**
 * === Css
 */
exports.loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(scss|sass|css)$/,
        include,
        exclude,
        use: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap'],
      },
    ],
  },
})

const MiniCssExtractPlugin = require('mini-css-extract-plugin')

exports.extractCSS = ({ include, exclude, use = [] }) => {
  // Output extracted CSS to a file
  const plugin = new MiniCssExtractPlugin({
    filename: 'css/[name].[contenthash:5].css',
  })

  return {
    module: {
      rules: [
        {
          test: /\.(scss|sass|css)$/,
          include,
          exclude,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
          ].concat(use),
        },
      ],
    },
    plugins: [plugin],
  }
}

/**
 * === JavaScript
 */
// exports.loadJavaScript = ({ include, exclude } = {}) => ({
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         include,
//         exclude,
//         // use: 'babel-loader?cacheDirectory',
//       },
//     ],
//   },
// })
