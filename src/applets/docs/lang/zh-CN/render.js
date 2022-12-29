"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Render',
    content: [
        [
            {
                type: 'title',
                value: 'Render'
            },
            {
                type: 'sub',
                value: 'AppletConfig > render'
            },
            {
                type: 'text',
                value: '除了通过配置项[source]定义程序卡视图，还可以通过 render 方法来直接渲染元素到程序卡内。'
            },
            {
                type: 'text',
                value: 'render 进行定义的程序卡将使用 shadowDom 模式。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              render?: (target: HTMLElement) => void\n            }\n          </code-highlight>\n        "
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
                value: 'render 函数将程序卡的根节点传入，开发者可将渲染视图直接插入到节点内。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    render: (target) => {\n                      target.innerHTML = `\n                        &lt;p>Hello World&lt;/p>\n                      `\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '使用 render 函数的最佳实践方案是把业务逻辑与模块配置进行分离，可使用动态 import 来引入业务逻辑的部分。'
            }
        ]
    ]
};
