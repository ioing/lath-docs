"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Timeout',
    content: [
        [
            {
                type: 'title',
                value: 'Timeout'
            },
            {
                type: 'sub',
                value: 'AppletConfig > timeout'
            },
            {
                type: 'text',
                value: 'The valid duration of the Applet life cycle, in milliseconds.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              timeout?: number\n            }\n          </code-highlight>\n        "
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
                value: 'When the Applet meets the cache conditions or is set to allow background running (background=true), the Applet will check the expiration status before the second entry, and will perform an update operation when it is checked that the Applet has expired.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    timeout: 36000\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'If the value is set to 0, background running (background=true) will not take effect.'
            }
        ]
    ]
};
