/**
 * @file vue-loader 配置文件
 * @author yuan(908654876@qq.com)
 */

'use strict';

const utils = require('./utils');
const config = require('../config');
const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
    loaders: utils.cssLoaders({
        sourceMap: isProduction
            ? config.build.productionSourceMap
            : config.dev.cssSourceMap,

        // extract: isProduction
        extract: true
    })
};
