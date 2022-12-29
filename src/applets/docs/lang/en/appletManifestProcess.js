"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'AppletManifestProcess',
    content: [
        [
            {
                type: 'title',
                value: 'AppletManifestProcess'
            },
            {
                type: 'sub',
                value: 'frameworlksAppletConfig > appletManifestProcess'
            },
            {
                type: 'text',
                value: 'When the Applet is loaded, its configuration file will be processed by this function before returning. (Frameworks Applet exclusive configuration)'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              appletManifestProcess?: (config: AppletManifest) => AppletManifest\n            }\n          </code-highlight>\n        "
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
                value: 'The handler function will be passed the current handler card configuration and receive a new one.'
            },
            {
                type: 'text',
                value: 'All Applet configuration can be rewritten through this configuration, such as setting uniform animation effects or verifying some security options.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    appletManifestProcess: (manify) => {\n                      ... process\n                      return newManify\n                    }\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'There are some complex options in the Applet configuration, such as \'inject\', \'components\', etc., through which the reusable configuration can be managed uniformly.'
            }
        ]
    ]
};
