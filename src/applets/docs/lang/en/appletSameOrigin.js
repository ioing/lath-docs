"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Applet.sameOrigin',
    content: [
        [
            {
                type: 'title',
                value: 'Applet.sameOrigin'
            },
            {
                type: 'sub',
                value: 'Applet.sameOrigin'
            },
            {
                type: 'text',
                value: 'Whether the Applet pages are same origin.'
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
                value: "\n          <code-highlight type=\"ts\">\n            type sameOrigin = boolean\n          </code-highlight>\n        "
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
                value: 'The Applet configured by \'source.src\' that returns \'true\' if it is homologous.'
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
                value: "\n          <code-highlight type=\"ts\">\n            const applet = await application.get('home')\n            console.log(applet.sameOrigin)\n          </code-highlight>\n        "
            }
        ]
    ]
};
