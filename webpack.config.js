const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs');

// Use a single entry point for SPA best practice
// Automatically create entry points for each JS file in src (excluding components)
const srcDir = path.resolve(__dirname, 'src');
const entry = {};
fs.readdirSync(srcDir).forEach(file => {
  if (file.endsWith('.js') && file !== 'components') {
    const name = path.parse(file).name;
    entry[name] = path.join(srcDir, file);
  }
});

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    static: './dist',
  },
};