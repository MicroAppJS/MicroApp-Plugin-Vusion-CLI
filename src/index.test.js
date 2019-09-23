'use strict';

/* global expect */

const path = require('path');

describe('Plugin VusionCLIAdapter', () => {

    it('VueCLIAdapter', () => {
        const { service } = require('@micro-app/cli/bin/base');
        service.registerPlugin({
            id: 'test:VusionCLIAdapter',
            link: path.join(__dirname, './index.js'),
        });

        service.run();
        // service.run('serve', { _: [], t: 'vusion' });

        // expect(api.chainWebpack).not.toBeUndefined();
        // expect(api.chainWebpack).not.toBeNull();

        // expect(api.configureWebpack).not.toBeUndefined();
        // expect(api.configureWebpack).not.toBeNull();

        // expect(api.configureDevServer).not.toBeUndefined();
        // expect(api.configureDevServer).not.toBeNull();
    });

});
