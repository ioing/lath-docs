"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'GlobalCSSVariables',
    content: [
        [
            {
                type: 'title',
                value: 'GlobalCSSVariables'
            },
            {
                type: 'sub',
                value: 'FrameworksAppletConfig > globalCSSVariables'
            },
            {
                type: 'text',
                value: 'Set global CSS variables for the application. (Frameworks Applet exclusive configuration)'
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
                value: "\n          <code-highlight type=\"ts\">\n            type GlobalCSSVariables = { [key: string]: string }\n            interface AppletBaseConfig {\n              globalCSSVariables?: GlobalCSSVariables | (() => GlobalCSSVariables)\n            }\n          </code-highlight>\n        "
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
                value: 'Similar to [safeArea], it can only take effect under the same domain Applet page.'
            },
            {
                type: 'text',
                value: 'If you need to dynamically modify or increase this value, you can update it through the "API-updateGlobalCSSVariables" event.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    globalCSSVariables: {\n                      '--main-color': '#fff',\n                      '--title-font-size': '28px'\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'Use with "API-updateGlobalCSSVariables" to create a smooth theme transition effect.'
            }
        ]
    ]
};
