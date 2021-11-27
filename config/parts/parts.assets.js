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
 * === Image
 */
exports.loadImages = ({ include, exclude, options } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|ico)(\?.*)?$/,
        include,
        exclude,
        use: [
          {
            loader: 'url-loader',
            options,
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
            },
          },
        ],
      },
    ],
  },
})
