'use strict'

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, '../src/index.tsx'),
  ],

  output: {
    path: path.resolve(__dirname, '../public/build'),
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    publicPath: '/',
    contentBase: path.join(__dirname, '../public'),
    historyApiFallback: true,
    hot: true,
    port: 8081,
    host: '0.0.0.0'
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js']
  },

  module: {
    rules: [

      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: true,
            plugins: ['react-hot-loader/babel']
          }
        },
        'awesome-typescript-loader'], exclude: /node_modules/ 
      },
      { 
        test: /\.scss$/,
        use: [
            'style-loader',
            {loader: 'css-loader', options: {sourceMap: true, importLoaders: 2}},
            {loader: 'postcss-loader', options: {sourceMap: true}},
            {loader: 'sass-loader', options: {sourceMap: true}}],
        exclude: /node_modules/
      },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader', exclude: /node_modules/ }
    ]
  }
};
