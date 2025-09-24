const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'none',
  externals: {
    './dist/server/main': 'require("./server/main")'
  },
  target: 'node',
  resolve: { extensions: ['.ts', '.js'] },
  optimization: {
    minimize: false
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    noParse: /polyfills-.*\.js/,
    rules: [
      {
        test: /(\\|\/)@angular(\\|\/)core(\\|\/).+\.js$/,
        parser: { system: true },
      },
      {
        test: /\.(jpg|png|webp|gif|svg|otf|ani|ico|cur)$/,
        loader: "url-loader",
        options: {
          "name": "[name].[hash:7].[ext]",
          "limit": 10000,
          "outputPath": "dist/browser/assets/img/",
          "publicPath": "src/assets/img/"
        }
      },
      {
        test: /\.(woff|woff2|ttf|eot|ico)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'dist/browser/assets/font/',
          name: '[name].[contenthash].[ext]',
        },
      },
    ]
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      /(.+)?angular(\\|\/)core(.+)?/,
      path.join(__dirname, 'src'),
      {}
    ),
    new webpack.ContextReplacementPlugin(
      /(.+)?express(\\|\/)(.+)?/,
      path.join(__dirname, 'src'),
      {}
    )
  ]
};
