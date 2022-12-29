"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'AllowHost',
    content: [
        [
            {
                type: 'title',
                value: 'AllowHost'
            },
            {
                type: 'sub',
                value: 'frameworksAppletConfig > allowHost'
            },
            {
                type: 'text',
                value: 'When [capture] is not set, insecure host addresses can be filtered out by this configuration, and vice versa. （frameworks Applet exclusive configuration)'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              allowHost?: Array&lt;string>\n            }\n          </code-highlight>\n        "
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
                value: 'This configuration is mainly used to prevent the application from accessing foreign websites as expected by splicing url parameters to prevent harm.'
            },
            {
                type: 'text',
                value: 'This configuration is ignored when the frameworks module has [capture] set.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                frameworks: {\n                  allowHost: [\n                    'aaa.com',\n                    'bbb.com',\n                    'ccc.com'\n                  ]\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'Generally, the jump behavior of A link in the Applet page will be automatically captured as a new window in the application to open, but sometimes this is not expected in all cases, so this option can be used to control an effective domain, when the domain does not match, it will not open a new window in the application, but directly open a new browser window for access.'
            },
            {
                type: 'tips',
                value: 'If your application may have accessible addresses entered by the user, you will most likely need this configuration to force new pages to be accessed as a new browser window.'
            }
        ]
    ]
};
