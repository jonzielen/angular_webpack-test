'use strict';

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
  }
 };
