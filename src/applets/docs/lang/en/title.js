"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Title',
    content: [
        [
            {
                type: 'title',
                value: 'title'
            },
            {
                type: 'sub',
                value: 'AppletConfig > title'
            },
            {
                type: 'text',
                value: 'Applet titles, mainly used for the display of browser window titles.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              title?: string\n            }\n          </code-highlight>\n        "
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
                value: 'When the window is switched, the configuration item acts as the Title tab in the page.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    title: 'Home Page'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Notes</h3>'
            },
            {
                type: 'tips',
                value: 'When the system Applets, framework Applets and home page Applets are set to title at the same time, their display weights are: home page > framework > system. In fact, this option for the system type Applet is unnecessary because it never takes effect.'
            }
        ]
    ]
};
