const path = require('path');
const slsw = require('serverless-webpack');

const externals = [];
if (!slsw.lib.webpack.isLocal) {
  externals.push(
      'aws-sdk',
      'mysql2',
      'mysql2/promise',
      'function-bind',
      'define-properties',
      'object-keys',
      'es-abstract',
  );
}
module.exports = {
  entry        : slsw.lib.entries,
  target       : 'node',
  mode         : slsw.lib.webpack.isLocal ? 'development' : 'production',
  externals,
  optimization : {
    minimize    : false,
    usedExports : true,
  },
  performance : {
    // Turn off size warnings for entry points
    hints : false,
  },
  devtool : slsw.lib.webpack.isLocal ? 'source-map' : false, // Sourcemap for local debug!
  output  : {
    libraryTarget : 'commonjs',
    path          : path.join(__dirname, '.webpack'),
    filename      : '[name].js',
  },
  module : {
    rules : [
      { // Package ts files.
        test    : /\.ts$/,
        exclude : /node_modules/,
        use     : ['babel-loader'],
      },
      { // Package js files.
        test    : /\.js$/,
        exclude : /node_modules/,
        use     : ['babel-loader'],
      },
    ],
  },
  resolve : {
    modules : [
      path.resolve(__dirname),
      path.resolve(__dirname, './node_modules/'),
    ],
    extensions : ['.js', '.jsx', '.ts', '.tsx'],
  },
};
