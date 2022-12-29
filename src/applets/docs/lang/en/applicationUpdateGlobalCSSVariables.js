"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Application.updateGlobalCSSVariables',
    content: [
        [
            {
                type: 'title',
                value: 'Application.updateGlobalCSSVariables'
            },
            {
                type: 'sub',
                value: 'Application.updateGlobalCSSVariables'
            },
            {
                type: 'text',
                value: 'Update the app\'s global CSS variables (subject to the same-origin policy).'
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
                value: "\n          <code-highlight type=\"ts\">\n            type ApplicationSafeAreaValue = string | Array<string>\n            type updateSafeArea = (data: ApplicationSafeAreaValue) => void\n          </code-highlight>\n        "
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
                value: 'When an update is performed, all modules within the lifecycle are updated with real-time style variables.'
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
                value: "\n          <code-highlight type=\"ts\">\n            application.updateGlobalCSSVariables({\n              '---common-button-color': '#000000',\n              '---common-button-width': '100%',\n            })\n          </code-highlight>\n        "
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
                value: 'The cross-domain module page needs to be handled by itself, please refer to \'Application.updateSafeArea\'.'
            }
        ]
    ]
};
