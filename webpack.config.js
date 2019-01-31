const path = require('path');
// const HtmlWebpackPlugin = require('html-webpack-plugin'); great for hot reloading and front-end only applications.

module.exports = {
  entry: './client/src/components/Index.jsx',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './public/dist')
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader, css-loader']
      }
    ]
  }
};