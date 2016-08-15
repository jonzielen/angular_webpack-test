module.exports = {
  entry: './app/src/todoApp.js',
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
