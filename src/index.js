'use strict';

const path = require('path');
const tryRequire = require('try-require');

module.exports = function VusionCLIAdapter(api, opts = {}) {

    api.modifyWebpackCompiler(config => {

        let { type, isDev, webpackConfig, devOptions, compiler } = config;

        if (type === 'vusion') {
            const vusionAdapter = require('./vusion')(webpackConfig, isDev, {
                modifyDefaultVusionConfig(vusionConfig) {
                    return api.applyPluginHooks('modifyDefaultVusionConfig', vusionConfig);
                },
                resolveVusionConfig(vusionConfig) {
                    return api.applyPluginHooks('modifyVusionConfig', vusionConfig);
                },
                resolveVusionWebpackConfig(vusionWebpackConfig) {
                    return api.applyPluginHooks('modifyVusionWebpackConfig', vusionWebpackConfig);
                },
            });
            webpackConfig = vusionAdapter.webpackConfig;
            devOptions = Object.assign({}, devOptions, vusionAdapter.devOptions || {}, opts.devOptions || {});

            const webpack = tryRequire('webpack');
            if (webpack) {
                compiler = webpack(webpackConfig);
            }
        }

        return Object.assign(config, { compiler, devOptions, webpackConfig });
    });
};
