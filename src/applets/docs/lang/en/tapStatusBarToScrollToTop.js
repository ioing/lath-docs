"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'TapStatusBarToScrollToTop',
    content: [
        [
            {
                type: 'title',
                value: 'TapStatusBarToScrollToTop'
            },
            {
                type: 'sub',
                value: 'AppletConfig > tapStatusBarToScrollToTop'
            },
            {
                type: 'text',
                value: 'When turned on, when you click on the status bar at the top of the window, the main scroll container scrolls to the top.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              tapStatusBarToScrollToTop?: boolean\n            }\n          </code-highlight>\n        "
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
                value: 'This option will be reflected on the main scroll, the main scroll bar refers to the configuration item "mainScrollID", the default main scroll is associated as the \'body\' container of the Applet.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    tapStatusBarToScrollToTop: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'The launch of this option depends on the configuration item "mainScrollID".'
            }
        ]
    ]
};
