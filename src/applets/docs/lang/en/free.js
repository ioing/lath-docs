"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Free',
    content: [
        [
            {
                type: 'title',
                value: 'Free'
            },
            {
                type: 'sub',
                value: 'AppletConfig > free'
            },
            {
                type: 'text',
                value: 'Define the window display type of the APPLETS.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              free?: boolean\n            }\n          </code-highlight>\n        "
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
                value: 'When free equals true, the APPLET runs in \'full-screen mode\', that is, it\'s not bound by the framework card.(Applets[id = frameworks]).'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    free: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'Suppose the framework card is a module with tabBar function, at this time the applet will directly cover the entire framework card to run, otherwise the applet will run inside the framework card. (That is, the tabBar is overridden on the framework card).'
            }
        ]
    ]
};
