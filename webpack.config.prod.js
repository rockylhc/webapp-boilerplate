var path = require("path");
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src/App.js")
    },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
        test: /.(js|jsx)?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query:{
            presets: ['react','es2015']
        }
    },{
        test: /\.css$/,
        loader: "css-loader!autoprefixer-loader!sass-loader"
    },{ 
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader','css?sourceMap!sass?sourceMap')
    },{
      test: /\.json?$/,
      loader: 'json'
    },{
        test: /\.(html)$/, 
        loader: "file?name=[path][name].[ext]&context=./build"
    },{
        test: /[\/\\]images.*\.(png|jpg|gif|svg)$/,
        loader: 'file?name=images/[name].[ext]'
    }]
  },
  plugins: [
      new ExtractTextPlugin("assets/css/styles.css", {
            allChunks: true
      }),
      new CopyWebpackPlugin([
          { from: 'src', ignore:['*.js', '*.scss']},
          { from: 'src/assets/css', ignore:['*.scss']}
      ])
  ]
};
