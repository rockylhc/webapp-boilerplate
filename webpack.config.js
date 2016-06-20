const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin  = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
      main: path.resolve(__dirname, "src/App.js")
  },
  output: {
    path: path.resolve(__dirname, "src"),
    filename: 'js/bundle.js'
  },
  module: {
    loaders: [{
        test: /.(js|jsx)?$/,
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel?presets[]=es2015&presets[]=react']
    },{
        test: /\.json$/,
        exclude: /node_modules/,
        loaders: 'json-loader'
    },{ 
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style!css?sourceMap!autoprefixer-loader?sourceMap!sass?sourceMap&sourceComments'
    },{
        test: /\.html$/,
        loader: 'html-loader'
    },{
        test: /\.(svg|ttf|woff|woff|eot)(\?v=\d+\.\d+\.\d+)$/,
        loader: 'url-loader'
    }]
  },
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      //new HtmlWebpackPlugin({title:'React'}),
      new ExtractTextPlugin("build/styles/styles.css?[hash]-[chunkhash]-[contenthash]-[name]", {
            disable: false,
            allChunks: true
      })
  ],
  resolve: {
     extensions: ['', '.js', '.jsx'],
  },
  sassLoader: {
          includePaths: [ 'assets/css' ]
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 8081,
    contentBase: './src',
    inline: true,
    hot:true
  }
};
