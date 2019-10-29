'use strict';

/* global expect */

describe('Plugin VusionCLIAdapter', () => {

    it('VusionCLIAdapter', () => {
        const { service } = require('@micro-app/cli');

        service.run();
        // service.run('serve', { _: [], t: 'vusion' });

        // expect(api.chainWebpack).not.toBeUndefined();
        // expect(api.chainWebpack).not.toBeNull();

        // expect(api.configureWebpack).not.toBeUndefined();
        // expect(api.configureWebpack).not.toBeNull();

        // expect(api.configureDevServer).not.toBeUndefined();
        // expect(api.configureDevServer).not.toBeNull();
    });

    it('show', () => {
        const { service } = require('@micro-app/cli');

        service.run('show', { _: [], plugins: true });

        // expect(api.chainWebpack).not.toBeUndefined();
        // expect(api.chainWebpack).not.toBeNull();

        // expect(api.configureWebpack).not.toBeUndefined();
        // expect(api.configureWebpack).not.toBeNull();

        // expect(api.configureDevServer).not.toBeUndefined();
        // expect(api.configureDevServer).not.toBeNull();
    });

    it('inspect', () => {
        const { service } = require('@micro-app/cli');

        service.run('inspect', { _: [], type: 'vusion' });

        // expect(api.chainWebpack).not.toBeUndefined();
        // expect(api.chainWebpack).not.toBeNull();

        // expect(api.configureWebpack).not.toBeUndefined();
        // expect(api.configureWebpack).not.toBeNull();

        // expect(api.configureDevServer).not.toBeUndefined();
        // expect(api.configureDevServer).not.toBeNull();
    });

});
