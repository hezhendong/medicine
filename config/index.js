'use strict'
// Template version: 1.2.7
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        '/traditionalChineseMedicine': {
            // target: 'http://114.215.241.137:7080',
            // target: 'http://18j258393v.iask.in:14156',
            target: 'http://www.hzkygd.cn',
            // target: 'http://192.168.3.211:8089',
            // target: 'http://www.hzkygd.cn',
            pathRewrite: {
              '^/traditionalChineseMedicine': '/traditionalChineseMedicine'
            },
            changeOrigin: true
          }
    },

    // Various Dev Server settings
    host: '192.168.3.170', // can be overwritten by process.env.HOST
    port: 80, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    
    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx2e3d6c7e2bd533a7&redirect_uri=http%3A%2F%2Fwww.hzkygd.cn%2Fweb_medicine%2Fh5%2Findex.html&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect
    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}