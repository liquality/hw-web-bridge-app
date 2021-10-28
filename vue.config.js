/* eslint-disable @typescript-eslint/no-var-requires */
const version = require('./package.json').version
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/dist/hw-web-bridge-app/${version}` : '/',
  outputDir: `dist/${version}`
}
