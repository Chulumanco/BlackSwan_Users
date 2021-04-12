const path = require('path')
module.exports = {
  transpileDependencies: [
    'vuetify',
    '@mdi/font/css/materialdesignicons.css'

  ],
  css: {
    loaderOptions: {
      sass: {
        includePaths: [path.resolve(__dirname, './node_modules/compass-mixins/lib')]
      }
    }
  },
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: [/node_modules/, /public/],
      }
    }
  }
 
}
