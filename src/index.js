'use strict';

module.exports = function VusionCLIAdapter(api, opts = {}) {

    api.assertVersion('>=0.1.5');

    // commands
    require('./commands/version')(api);

    // vusion
    require('./vusionMethods')(api);

    api.modifyWebpackConfig(config => {

        let { args, webpackConfig } = config;
        const type = args.t || args.type;
        const isDev = process.env.NODE_ENV !== 'production';

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
            webpackConfig.devServer = Object.assign(webpackConfig.devServer || {}, vusionAdapter.devOptions || {}, opts.devOptions || {});
        }

        return Object.assign(config, { webpackConfig });
    });
};

module.exports.configuration = {
    description: '针对 Vusion Cli 适配器',
};
