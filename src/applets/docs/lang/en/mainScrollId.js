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
                value: 'Specify the main scroll container for the Applet, which can be used in conjunction with [tapStatusBarToScrollToTop] and [pullToRefresh].'
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
                value: 'If no main scroll container is specified, the default &lt;define-applet> is the main scroll.'
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
                value: 'Note that the specified scroll container "id" cannot exist in the \'ShadowDom\'.'
            }
        ]
    ]
};
