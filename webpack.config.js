const path = require("path")

module.exports = {
  entry: "./app/Main.jsx",
  output: {
    publicPath: "/",
    path: path.resolve(__dirname, "dist"),
    filename: "bundled.js"
  },
  watch: true,
  mode: "development",
  devtool: "source-map",
  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, "app"),
    hot: true,
    historyApiFallback: {
      index: "index.html"
    }
  },
  module: {
    rules: [{
      test: /\.jsx$/,
      exclude: /(node_modules)/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react",
            ["@babel/preset-env",
              {
                targets: {
                  node: "12"
                }
              }]]
        }
      }
    }]
  }
}