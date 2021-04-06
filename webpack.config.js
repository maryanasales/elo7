const webpack = require('webpack');
const path = require('path');

const config = {
  mode: 'development',
  entry: ['./dist/_js/main.js', './dist/_sass/main.sass'],
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ],
    rules: [
        {
            test: /\.s[ac]ss$/i,
            exclude: /node_modules/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'css/', name: 'main.css',
                }
              },              
              'sass-loader'
            ],
        },
      ],
  },  
  devtool: "source-map",
  stats: 'errors-warnings',
  watch: true,
};

module.exports = config;