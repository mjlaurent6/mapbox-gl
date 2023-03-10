const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    app: './app.js'
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env', '@babel/react']
            }
          }
        ]
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]'
        }
      },
    ]
  },

  // Optional: Enables reading mapbox token from environment variable
  plugins: [
    new HtmlWebpackPlugin({title: 'react-map-gl Example'}),
    new webpack.EnvironmentPlugin({MapboxAccessToken: ''})
  ]
};
