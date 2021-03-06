const webpack = require('webpack');
const baseConfig = require('./webpack.base.config.js');
const objectAssign = require('object-assign');

const config = objectAssign({}, baseConfig);

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production'),
  }),
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      screw_ie8: true,
      warnings: false,
    },
    sourceMap: false,
  }),
];

module.exports = config;
