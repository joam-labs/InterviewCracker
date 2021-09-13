const path = require('path');
const entry = ['./client/index.js'];
const output = {
  path: path.resolve(__dirname, 'build'),
  filename: 'bundle.js',
};
const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = () => {
  const env = dotenv.config().parsed;

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next]);
    return prev;
  }, {});

  return {
    mode: process.env.NODE_ENV,
    entry,
    output,
    devtool: 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.(png|jp(e*)g|svg|gif)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: 'images/[hash]-[name].[ext]',
              },
            },
          ],
        },
        {
          test: /.(js|jsx)$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [
              '@babel/plugin-transform-runtime',
              '@babel/transform-async-to-generator',
            ],
          },
        },
        {
          test: /\.s[ac]ss$/i,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
    devServer: {
      publicPath: '/build/',
      proxy: {
        '/api': 'http://localhost:3000',
      },
    },
    plugins: [new webpack.DefinePlugin(envKeys)],
  };
};
