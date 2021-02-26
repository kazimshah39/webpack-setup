const currentTask = process.env.npm_lifecycle_event
const path = require("path")
const cp = "/data/data/com.termux/files/usr/lib/node_modules/"
const miniCssExtractPlugin = require(cp+"mini-css-extract-plugin")
const htmlWebpackPlugin = require(cp+"html-webpack-plugin")
const {
  CleanWebpackPlugin
} = require(cp+"clean-webpack-plugin")
const {
  WebpackManifestPlugin
} = require(cp+"webpack-manifest-plugin")

const config = {
  resolve: {
    alias: {
      cp,
    }
  },
  entry: "./app/Main.jsx",
  output: {
    publicPath: "",
    path: path.resolve(__dirname, "dist"),
    filename: "bundled.[hash].js"
  },
  plugins: [new htmlWebpackPlugin({
    template: './app/index.html'
  })],
  mode: "development",
  devtool: "eval-cheap-source-map",
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "dist"),
    hot: true,
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [cp+"style-loader",
        cp+"css-loader",
        cp+"postcss-loader"]
    },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: cp+"babel-loader",
          options: {
            presets: [cp+"@babel/preset-react"]
          }
        }
      }]
  }
}

if (currentTask == "build") {
  config.mode = "production"
  config.module.rules[0].use[0] = miniCssExtractPlugin.loader
  config.plugins.push(new miniCssExtractPlugin({
    filename: 'main.[hash].css'
  }), new CleanWebpackPlugin(), new WebpackManifestPlugin())
}

module.exports = config