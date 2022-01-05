const path = require('path')
const theme = require('./src/assets/theme')
const resolve = (dir) => {
    return path.join(__dirname, dir) //path.join(__dirname)设置绝对路径
}
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '',
    productionSourceMap: false, //生产环境是否生成
    filenameHashing: true, //打包添加hash
    configureWebpack: (config) => {
        process.env.VUE_APP_BUILD_NAME !== 'pro' && (config.devtool = 'source-map')
    },
    chainWebpack: (config) => {
        config.resolve.alias.set('@', resolve('./src'))
    },
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
                modifyVars: theme
            }
        }
    }
}
