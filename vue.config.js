/* eslint-disable @typescript-eslint/no-var-requires */
const version = require('./package.json').version
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/hw-web-bridge-app/dist/${version}` : '/',
  outputDir: `dist/${version}`,
  devServer: {
    https: true,
    compress: true
  },
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Liquality::Hardware Wallet Web Bridge'
        return args
      })
  }
}
