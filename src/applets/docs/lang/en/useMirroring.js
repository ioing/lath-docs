"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'UseMirroring',
    content: [
        [
            {
                type: 'title',
                value: 'UseMirroring'
            },
            {
                type: 'sub',
                value: 'AppletConfig > useMirroring'
            },
            {
                type: 'text',
                value: 'Persists the last accessed image file for quick rendering on the next access.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              useMirroring?: boolean\n            }\n          </code-highlight>\n        "
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
                value: 'When an Applet page is destroyed, its internal HTML is localized and persistently stored, and the last access result is rendered immediately on the next visit until the new content is loaded and disappears.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    useMirroring: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'When the local storage overflows, all localStorage local data is cleared, which is generally used in some scenarios with low frequency of change, so please fully consider the rationality of the logic before use.'
            },
            {
                type: 'tips',
                value: 'Mirror restore cannot store and restore \'Web Components\', \'ShadowDom\', and embedded media such as \'iframe\', \'canvases\', \'objects\', etc. in pages, and should be considered when using this option.'
            }
        ]
    ]
};
