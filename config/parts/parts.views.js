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
