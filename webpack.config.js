'use strict';

var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/src/todoApp.js',
    vendor: ['angular']
  },
  output: {
    path: './app/min',
    filename: 'app.bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
  ]
 };
