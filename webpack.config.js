const ip = require('ip')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// const mode = 'development'
const mode = 'production'
const entrys = {
  main: './src/index.ts'
}

module.exports = {
  mode: mode,
  devtool: "cheap-module-source-map",
  // devtool: 'source-map',
  entry: entrys,
  output: {
    path: path.resolve(__dirname, './docs'),
    filename: '[name].js'
  },
  resolve: {
    extensions: [".js", ".ts", ".html"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: ["ts-loader"]
      },
      {
        test: /\.html$/i,
        use: 'text-loader'
      },
      {
        test: /\.css$/i,
        use: 'text-loader'
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Lath'
    }),
  ],
  devServer: {
    host: ip.address(),
    hot: true,
    open: true
  },
  watchOptions: {
    poll: 500,
    aggregateTimeout: 100,
    ignored: '/node_moduels/'
  }
}