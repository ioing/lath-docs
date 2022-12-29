"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'NotFound',
    content: [
        [
            {
                type: 'title',
                value: 'NotFound'
            },
            {
                type: 'sub',
                value: 'FrameworksAppletConfig > notFound'
            },
            {
                type: 'text',
                value: '404 Applet (frameworks Applet exclusive configuration)'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface FrameworksAppletConfig {\n              notFound?: string\n            }\n          </code-highlight>\n        "
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
                value: 'If the requested Applet page does not exist, it will be automatically routed to the Applet, and if it is not configured, it will automatically jump to the Apple whose "id" is "404".'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    notFound: 'home'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'The 404 module is mainly used for the acceptance and statistics of abnormal access to the application.'
            }
        ]
    ]
};
