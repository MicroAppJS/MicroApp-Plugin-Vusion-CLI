'use strict';

module.exports = function VusionCLIAdapter(api, opts = {}) {

    // commands
    require('./commands/version')(api);

    // vusion
    require('./vusionMethods')(api);

    api.modifyWebpackConfig(config => {

        let { type, isDev, webpackConfig, devOptions } = config;

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
        }

        return Object.assign(config, { devOptions, webpackConfig });
    });
};
