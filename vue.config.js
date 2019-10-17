module.exports = {
  configureWebpack: config => {
    return {
      resolve: {
        alias: {
          '@bs': '/node_modules/boostrap/scss/bootstrap',
	      '@bsi':'/node_modules/bootstap-vue/stc/index.scss',
        }
      }
    }
  },
  devServer: {
  }
}
