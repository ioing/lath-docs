"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Application.preActivityApplet',
    content: [
        [
            {
                type: 'title',
                value: 'Application.preActivityApplet'
            },
            {
                type: 'sub',
                value: 'Application.preActivityApplet'
            },
            {
                type: 'text',
                value: '前一个活动的 Applet。'
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
                value: "\n          <code-highlight type=\"ts\">\n            preActivityApplet: Applet\n          </code-highlight>\n        "
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
                value: '返回前一个来源的 Applet。'
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
                value: "\n          <code-highlight type=\"ts\">\n            const { application } = await createApplication({\n              applets: {\n                ...\n              }\n            })\n            console.log(application.preActivityApplet)\n          </code-highlight>\n        "
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
                value: '程序卡的获取逻辑与<a href="?id=applicationActivityApplet#docs" preset-effect="slide" clone-as="doc-newWindow-applicationActivityApplet">Application.activeApplet</a>保持一致。'
            }
        ]
    ]
};
