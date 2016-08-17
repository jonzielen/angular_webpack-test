var webpack = require('webpack');

module.exports = {
  entry: {
    app: './app/src/todoApp.js',
    angular: ['angular']
  },
  output: {
    path: './app/min',
    filename: '[name].bundle.js'
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
      mangle: false,
      compress: {
        warnings: false
      }
    }),
  ]
 };
