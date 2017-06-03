const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: './dist/preact-responsive.js',
    sourceMapFilename: './dist/preact-responsive.js.map',
    libraryTarget: 'umd',
    library: 'MediaQuery'
  },
  devtool: 'source-map',
  externals: {
    'react': 'umd react',
    'react-dom': 'umd react-dom'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin()
  ],
  resolve: {
    extensions: [ '', '.js' ],
    root: path.resolve('src'),
    modulesDirectory: 'node_modules'
  },
  module: {
    loaders: [
      { test: [ /\.js$/, /\.jsx$/ ], loader: 'babel', exclude: /node_modules/ }
    ]
  }
}
