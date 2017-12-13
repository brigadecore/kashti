const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FailPlugin = require('webpack-fail-plugin');
// const autoprefixer = require('autoprefixer');

const cleanOptions = {
  root: process.cwd(),
  verbose: true,
  dry: false
};

module.exports = {
  module: {
    loaders: [
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre'
      },
      {
        test: /\.(css|scss)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: [
          'ng-annotate-loader',
          'babel-loader'
        ]
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: [
          'html-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        exclude: /node_modules/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        exclude: /node_modules/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([conf.paths.dist], cleanOptions),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    FailPlugin,
    new HtmlWebpackPlugin({
      template: conf.path.src('index.html')
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    path: path.join(process.cwd(), conf.paths.dist),
    filename: '[name].[chunkhash].js'
  },
  entry: {
    bundle: `./${conf.path.src('app.js')}`,
    vendor: [
      'angular',
      'angular-resource',
      'angular-gantt',
      'angular-highlightjs',
      'angular-moment',
      '@uirouter/angularjs',
      'fastclick'
    ]
  }

};
