const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: './src/index.tsx'
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    port: 9000
  },
  mode: 'development',
  resolve: {
    extensions: [`.ts`, '.tsx', '.js', '.json']
  },
  plugins: [
    new webpack.DllReferencePlugin({
      manifest: require('./dist/library.json')
    }),
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    new AddAssetHtmlPlugin([
      { filepath: path.resolve(__dirname, './dist/library.js'), includeSourcemap: false }
    ])
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }, {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader'
      }, {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, {
        test: /\.svg$/,
        use: [
          {
            loader: 'react-svg-loader',
            options: { jsx: true }
          }
        ]
      }, {
        test: /\.(png|jpg)$/,
        loader: 'file-loader'
      }
    ]
  }
};