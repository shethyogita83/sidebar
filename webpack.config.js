const webpack = require('webpack');
const path = require('path');

var SRC_DIR = path.join(__dirname, '/client/src');
var DIST_DIR = path.join(__dirname, '/client/dist');

module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      BASE_URL: JSON.stringify('http://54.215.215.188:3003'),
      APIKEY: JSON.stringify('YOUR_API_KEY'),
    })
  ],
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : SRC_DIR,
        loader : 'babel-loader',      
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      }
    ]
  },
  resolve: { 
    alias: { 
      'react': path.resolve(__dirname, 'node_modules', 'react') 
  } }
};
