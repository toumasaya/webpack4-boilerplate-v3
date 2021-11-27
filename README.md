# webpack 4 boilerplate v3

webpack 4 boilerplate using Pug, PostCSS and Dart Sass.

## Installation

- Clean template -> choose `main` branch
- Bulma template -> choose `webpack4-bulma-template` branch

Clone template repo and npm install.

```shell
npm i
```

## Usage

### Development server

```shell
npm run dev
```

You can view the development server at `localhost:9527`.

### Production build

```shell
npm run build
```

You can view the file in `dist`.

### Production deploy to GitHub `gh-pages`

```shell
npm run deploy
```

You can deploy `dist` to `gh-pages` branch.

### Linter check

```shell
npm run lint
```

You can view linter info in the terminal.

## Features

- [webpack 4](https://v4.webpack.js.org/)
- [Dart Sass](https://sass-lang.com/dart-sass)
- [PostCSS](https://postcss.org/)
- [Pug](https://pugjs.org/api/getting-started.html)

## Dependencies

### webpack

- [`webpack`](https://v4.webpack.js.org/) - Module and asset bundler
- [`webpack-cli`](https://github.com/webpack/webpack-cli) - Command line interface for webpack
- [`webpack-dev-server`](https://github.com/webpack/webpack-dev-server) - Development server for webpack
- [`webpack-merge`](https://github.com/survivejs/webpack-merge) - Simplify development/production configuration

### Loaders

- [`sass-loader`](https://webpack.js.org/loaders/sass-loader/) - Load SCSS and compile to CSS
  - [`sass`](https://github.com/sass/dart-sass) - Dart Sass
- [`postcss-loader`](https://webpack.js.org/loaders/postcss-loader/) - Process CSS with PostCSS
  - [`autoprefixer`](https://github.com/postcss/autoprefixer) - Dependency for `postcss-loader` loader
- [`css-loader`](https://webpack.js.org/loaders/css-loader/) - Resolve CSS imports
- [`style-loader`](https://webpack.js.org/loaders/style-loader/) - Inject CSS into the DOM
- [`html-loader`](https://v4.webpack.js.org/loaders/html-loader/) - Exports HTML as string
- [`pug-html-loader`](https://github.com/willyelm/pug-html-loader) - Load Pug and compile to HTML
- [`file-loader`](https://v4.webpack.js.org/loaders/file-loader/) - Resolves `import/require()` on a file into a url and emits the file into the output directory.
- [`url-loader`](https://v4.webpack.js.org/loaders/url-loader/) - Transforms files into base64 URIs.
- [`image-webpack-loader`](https://github.com/tcoopman/image-webpack-loader) - Minify PNG, JPEG, GIF, SVG and WEBP images with [imagemin](https://github.com/kevva/imagemin)

### Plugins

- [`clean-webpack-plugin`](https://github.com/johnagan/clean-webpack-plugin) - Remove/clean build folders
- [`copy-webpack-plugin`](https://github.com/webpack-contrib/copy-webpack-plugin) - Copy files to build directory
- [`html-webpack-plugin`](https://github.com/jantimon/html-webpack-plugin) - Generate HTML files from template
- [`mini-css-extract-plugin`](https://github.com/webpack-contrib/mini-css-extract-plugin) - Extract CSS into separate files
- [`optimize-css-assets-webpack-plugin`](https://github.com/NMFR/optimize-css-assets-webpack-plugin) - Optimize and minimize CSS assets
  - [`cssnano`](https://github.com/cssnano/cssnano) - Dependency for `optimize-css-assets-webpack-plugin` plugin
- [`purgecss-webpack-plugin`](https://github.com/FullHuman/purgecss) - Remove unused css
- [`git-revision-webpack-plugin`](https://github.com/pirelenito/git-revision-webpack-plugin) - Generates `VERSION` and `COMMITHASH` files during build based on a local git repository
- [`gh-pages`](https://github.com/tschaub/gh-pages) - Publish files to a `gh-pages` branch on GitHub
- [`webpack-bundle-analyzer`](https://github.com/webpack-contrib/webpack-bundle-analyzer) - Visualize size of webpack output files with an interactive zoomable treemap
- [`size-plugin`](https://github.com/googlechromelabs/size-plugin) - Prints the gzipped sizes of your webpack assets and the changes since the last build
- [`error-overlay-webpack-plugin`](https://github.com/gregberge/error-overlay-webpack-plugin) - Display an error overlay in your application

### Linters

- [`eslint`](https://github.com/eslint/eslint) - Enforce styleguide across application
- [`eslint-config-airbnb-base`](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) - Base styleguide to enforce rules
- [`eslint-config-prettier`](https://github.com/prettier/eslint-config-prettier) - Implement prettier rules
- [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) - Implement import rules
- [`eslint-plugin-prettier`](https://github.com/prettier/eslint-plugin-prettier) - Runs Prettier as an ESLint rule and reports differences as individual ESLint issues
- [`eslint-plugin-compat`](https://github.com/amilajack/eslint-plugin-compat) - Lint the browser compatibility of your code
- [`eslint-import-resolver-webpack`](https://github.com/benmosher/eslint-plugin-import/tree/master/resolvers/webpack) - Throw exceptions for import/export in webpack
- [`prettier`](https://github.com/prettier/prettier) - Dependency for `prettier-webpack-plugin` plugin
