"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'PreIndex',
    content: [
        [
            {
                type: 'title',
                value: 'PreIndex'
            },
            {
                type: 'sub',
                value: 'FrameworksAppletConfig > preIndex'
            },
            {
                type: 'text',
                value: '通过链接访问某个程序卡时，可在之前插入一个前置的程序卡。（frameworks 程序卡专属配置）'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface FrameworksAppletConfig {\n              preIndex?: string\n            }\n          </code-highlight>\n        "
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
                value: '当通过访问页面 url 锚定到某个程序卡时，可以通过此配置项设置一个前置程序卡，此时访问该 url 链接时依然会优先访问锚定的程序卡，但当点击浏览器返回时并不会立刻退出，而是从锚定程序卡回退到通过该配置项插入的前置程序卡。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    preIndex: 'home'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: '当访问链接所锚定的程序卡和 [preIndex] 或 [index] 相等时则不会在之前再次插入前置程序卡。'
            }
        ]
    ]
};
