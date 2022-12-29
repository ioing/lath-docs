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
                value: '程序卡的视图对象。'
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
                value: '视图的不同的元素类型由 viewType 而决定。'
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
