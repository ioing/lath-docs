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
                value: 'Applet of the previous activity.'
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
                value: 'Returns the previous Applet.'
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
                value: 'The acquisition logic of the program card is consistent with <a href="?id=applicationActivityApplet#docs" preset-effect="slide" clone-as="doc-newWindow-applicationActivityApplet">Application.activeApplet</a>.'
            }
        ]
    ]
};
