"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Index',
    content: [
        [
            {
                type: 'title',
                value: 'Index'
            },
            {
                type: 'sub',
                value: 'FrameworksAppletConfig > index'
            },
            {
                type: 'text',
                value: '定义应用的默认入口的程序卡。（frameworks 程序卡专属配置）'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface FrameworksAppletConfig {\n              index?: string\n            }\n          </code-highlight>\n        "
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
                value: '启动 Lath 应用时首先会先启动 frameworks 程序卡，然后根据“index”配置启动首页程序卡。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    index: 'home'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: '当应用启动时将首先初始化名称为“home”的程序卡。'
            }
        ]
    ]
};
