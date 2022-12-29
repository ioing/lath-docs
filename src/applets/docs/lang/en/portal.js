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
                value: 'When the Applet with this property is enabled, when the browser supports the portal feature, the activation operation of the portal will be performed after the transition animation ends, and the Applet page will run in a new context after activation.'
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
                value: 'The source configuration of the Applet should be in link mode and in the same domain as the main application.'
            },
            {
                type: 'text',
                value: 'For an Applet set to portal, is [free] option should generally also be set to true.'
            },
            {
                type: 'text',
                value: 'When the browser dose not support the portal capability, it will automatically downgrade to the general container mode.'
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
                value: 'This option is suitable for Applets with independent functions and no connection with the main application (such as apply, inject, etc.), otherwise, the configuration of these dependent contexts will be invalid.'
            }
        ]
    ]
};
