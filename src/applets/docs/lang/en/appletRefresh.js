"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Applet.refresh',
    content: [
        [
            {
                type: 'title',
                value: 'Applet.refresh'
            },
            {
                type: 'sub',
                value: 'Applet.refresh'
            },
            {
                type: 'text',
                value: 'The view object of the Applet.'
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
                value: "\n          <code-highlight type=\"ts\">\n            type refresh = () => Promise<void>\n          </code-highlight>\n        "
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
                value: 'Smooth refresh of the page, and return a \'Promise\' object.'
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
                value: "\n          <code-highlight type=\"ts\">\n            const applet = await application.get('home')\n            applet.refresh()\n          </code-highlight>\n        "
            }
        ]
    ]
};
