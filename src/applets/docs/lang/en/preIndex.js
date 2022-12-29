"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'PreIndex',
    content: [
        [
            {
                type: 'title',
                value: 'PreIndex'
            },
            {
                type: 'sub',
                value: 'FrameworksAppletConfig > preIndex'
            },
            {
                type: 'text',
                value: 'When accessing a Applet via a link, a pre-positioned Applet can be inserted before. (Frameworks Applet exclusive configuration)'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface FrameworksAppletConfig {\n              preIndex?: string\n            }\n          </code-highlight>\n        "
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
                value: 'When anchoring to a Applet by visiting the page url, you can set a pre-Applet through this configuration item. At this time, when accessing the url link, the anchored Applet will still be preferentially accessed, but when the browser is clicked to return, it does not exit immediately, but falls back from the anchor Applet to the front Applet inserted through this configuration item.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                frameworks: {\n                  config: {\n                    preIndex: 'home'\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'When the Applet anchored by the access link is equal to [preIndex] or [index], the pre-Applet will not be inserted again before.'
            }
        ]
    ]
};
