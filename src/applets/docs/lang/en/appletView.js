"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Applet.view',
    content: [
        [
            {
                type: 'title',
                value: 'Applet.view'
            },
            {
                type: 'sub',
                value: 'Applet.view'
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
                value: "\n          <code-highlight type=\"ts\">\n            type view = HTMLElement | HTMLPortalElement | HTMLIFrameElement | null\n          </code-highlight>\n        "
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
                value: 'The different element types of a view are determined by the \'viewType\'.'
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
                value: "\n          <code-highlight type=\"ts\">\n            const applet = await application.get('home')\n            console.log(applet.view)\n          </code-highlight>\n        "
            }
        ]
    ]
};
