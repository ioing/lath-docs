"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'MainScrollId',
    content: [
        [
            {
                type: 'title',
                value: 'MainScrollId'
            },
            {
                type: 'sub',
                value: 'AppletConfig > mainScrollId'
            },
            {
                type: 'text',
                value: '指定 Applet 的主滚动容器，其与 [tapStatusBarToScrollToTop] 和 [pullToRefresh] 能够联合使用。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              mainScrollId?: string\n            }\n          </code-highlight>\n        "
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
                value: '如果没有指定主滚动容器，则默认 &lt;define-applet> 元素为主滚动。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    mainScrollId: 'root'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '注意指定的滚动容器“id”不可存在于 ShadowDom 中。'
            }
        ]
    ]
};
