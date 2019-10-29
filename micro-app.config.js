'use strict';

module.exports = {
    name: '@micro-app/demo',
    description: '',
    version: '0.0.1',
    type: '', // types 类型

    // staticPath: '',

    // dlls: [
    //     {
    //         context: __dirname,
    //     },
    // ],

    alias: { // 前端
        api: 'abc',
        config: {
            link: 'abc',
            description: '配置',
        },
        service: {
            link: 'abc',
            description: '接口',
            type: 'server',
        },
    },

    // 服务配置
    server: {
        entry: '', // 服务端入口
        port: 8088, // 服务端口号
        options: {
            // 服务端回调参数
        },
    },

    plugins: [
        '@micro-app/plugin-webpack-adapter',
        [{
            id: 'test:plugin-vusion-cli',
            link: __dirname + '/src/index.js',
        }],
    ],
};
