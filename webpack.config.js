const path = require('path')

module.exports = {
  context: __dirname,
  entry: ['whatwg-fetch', './client/app/App.jsx'],
  output: {
    path: path.join(__dirname, '/client/src'),
    publicPath: '/src/',
    filename: 'bundle.js'
  },
  devtool: '#eval-source-map',
  devServer: {
    publicPath: '/client/src',
    open: true,
    historyApiFallback: true,
    contentBase: '/client/src'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.less', '.scss', '.css']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        enforce: 'pre'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        enforce: 'post'
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', 'css-loader', 'less-loader'
        ]
      }
    ]
  }
}
