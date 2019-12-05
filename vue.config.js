module.exports = {
  publicPath: "/",
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        prependData: `@import './src/assets/style/_app.sass'`
      }
    }
  }
}
