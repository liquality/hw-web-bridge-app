/* eslint-disable @typescript-eslint/no-var-requires */
const version = require('./package.json').version
const path = require('path')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/hw-web-bridge-app/dist/${version}` : '/',
  outputDir: `dist/${version}`,
  chainWebpack: (config) => {
    config
      .plugin('html')
      .tap((args) => {
        args[0].title = 'Liquality::Hardware Wallet Web Bridge'
        return args
      })
  }
}
