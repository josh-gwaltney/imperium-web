let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

const PATHS = {
  JS: path.join(__dirname, 'src/js'),
  CSS: path.join(__dirname, 'src/css'),
  DIST: path.join(__dirname, 'dist')
};

module.exports = {
  entry: PATHS.JS + '/app.js',
  output: {
    path: PATHS.DIST,
    filename: 'site.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            'es2015',
            'es2016',
            'es2017',
            'stage-2'
          ]
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css-loader!sass-loader')
      }
    ]
  },
  plugins:[
      new ExtractTextPlugin('site.css')
  ]
};

