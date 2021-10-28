/* eslint-disable @typescript-eslint/no-var-requires */
const version = require('./package.json').version
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? `/hw-web-bridge-app/dist/${version}` : '/',
  outputDir: `dist/${version}`
}
