"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Portal',
    content: [
        [
            {
                type: 'title',
                value: 'Portal'
            },
            {
                type: 'sub',
                value: 'AppletConfig > portal'
            },
            {
                type: 'text',
                value: '开启该属性的程序卡在浏览器支持 portal 特性时，在转场动画结束后会执行 portal 的激活操作，激活后程序卡页面将在新的上下文中运行。'
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Types</h3>'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              portal?: boolean\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Details</h3>'
            },
            {
                type: 'text',
                value: '程序卡的 source 配置应为链接模式，且与主应用同域。'
            },
            {
                type: 'text',
                value: '设置为 portal 的程序卡， 其[free]选项一般也应设置为 true。'
            },
            {
                type: 'text',
                value: '当浏览器不支持 portal 能力时会自动降级为一般容器模式。'
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Example</h3>'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    portal: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Notes</h3>'
            },
            {
                type: 'text',
                value: '该选项适用于功能独立且与主应用没有任何的联系的（如 apply、inject 等）程序卡，否则，将会导致这些依赖上下文的配置失效。'
            }
        ]
    ]
};
