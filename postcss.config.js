const cp = "/data/data/com.termux/files/usr/lib/node_modules/"

module.exports = {
  plugins: [
    require(cp+'postcss-preset-env')({
      browsers: 'last 2 versions',
    }),
  ],
};