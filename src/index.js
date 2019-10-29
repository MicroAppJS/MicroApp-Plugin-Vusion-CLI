'use strict';

module.exports = function VusionCLIAdapter(api, opts = {}) {

    api.assertVersion('>=0.2.0');

    // commands
    require('./commands/version')(api);

    // vusion
    require('./vusionMethods')(api);

    api.modifyWebpackConfig(webpackConfig => {

        const args = api.parseArgv();
        const type = args.t || args.type;
        const isDev = api.mode === 'development';

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

        return webpackConfig;
    });
};

module.exports.configuration = {
    description: '针对 Vusion Cli 适配器',
};
