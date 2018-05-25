const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  resolve: {
    extensions: [`.ts`, '.tsx', '.js', '.json']
  },
  entry: {
    library: [
      'react',
      'react-dom',
      'prop-types',
      'glamor',
      'glamorous',
      'lodash'
    ],
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'dist'),
    library: '[name]'
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]',
      path: path.join(__dirname, 'dist', '[name].json'),
    })
  ]
};