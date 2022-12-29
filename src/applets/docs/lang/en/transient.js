"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Transient',
    content: [
        [
            {
                type: 'title',
                value: 'Transient'
            },
            {
                type: 'sub',
                value: 'AppletConfig > transient'
            },
            {
                type: 'text',
                value: 'Mark the Applet as a temporary module.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              transient?: boolean\n            }\n          </code-highlight>\n        "
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
                value: 'When the Applet switches to the background, it is immediately destroyed and all temporary configuration data for the Applet is deleted at the same time.'
            },
            {
                type: 'text',
                value: 'URL-type Applets (i.e. temporary modules without custom configuration) opened through a new window (A link or API - pushWindow) are automatically marked.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                demoPage: {\n                  config: {\n                    transient: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'This parameter can generally be used when there is no reuse of your Applet, such as dynamically generated Applets that cannot be enumerated.'
            },
            {
                type: 'tips',
                value: 'What is the significance of this configuration item? When a build module accessed by the A link accumulates a lot of useless Applet configurations because the links cannot be enumerated, turning on this option eliminates these meaningless memory consumption.'
            }
        ],
        [
            {
                type: 'title',
                value: 'DisableTransient'
            },
            {
                type: 'sub',
                value: 'AppletConfig > disableTransient'
            },
            {
                type: 'text',
                value: '\'DisableTransient\' echoes \'Transient\', and this parameter allows you to turn off the default \'Transient\' behavior.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              disableTransient?: boolean\n            }\n          </code-highlight>\n        "
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
                value: 'If, in a particular case, the module does not need to define any configuration (or the developers is lazy to set it) and the module is actually enumerable (the automatically generated configuration is also meaningful, and there is a possibility of reuse rather than temporary Applets), so configuring this option turns off the mechanism for automatically clearing the generated Applet configuration.'
            },
        ]
    ]
};
