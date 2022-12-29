"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'MediaGuard',
    content: [
        [
            {
                type: 'title',
                value: 'MediaGuard'
            },
            {
                type: 'sub',
                value: 'AppletConfig > mediaGuard'
            },
            {
                type: 'text',
                value: 'When this setting is enabled, the video and audio in the same-origin Applet will be intelligently controlled. When the module is hidden, the audio/video being played will be automatically paused, otherwise, the paused audio/video will be resumed when module is visible.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              mediaGuard?: boolean\n            }\n          </code-highlight>\n        "
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
                value: 'In general scenarios, automatic media control can help you automatically process the media status. If the automatic processing fails, the Applet will be forcibly destroyed, except for background running (background=true).'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    mediaGuard: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'Without this option, you can also manage manually via window visibility events - refer to API - Application - Events.'
            }
        ]
    ]
};
