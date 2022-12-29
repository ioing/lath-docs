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
                value: '平滑页面刷新，返回一个 Promise 对象。'
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
