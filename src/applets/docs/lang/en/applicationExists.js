"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Application.exists',
    content: [
        [
            {
                type: 'title',
                value: 'Application.exists'
            },
            {
                type: 'sub',
                value: 'Application.exists'
            },
            {
                type: 'text',
                value: 'Get the historical sequence which was whether loaded for the first time of the current page. '
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
                value: "\n          <code-highlight type=\"ts\">\n            type exists = boolean\n          </code-highlight>\n        "
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
                value: 'When you first access the link into the app, Lath will record the location of your current history node, and after any page activity occurs, it can detect whether the current position has changed. If the value is false, it means that the history has changed, that is, the current history is not the first entry.'
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
                value: "\n          <code-highlight type=\"ts\">\n            console.log(application.exists)\n          </code-highlight>\n        "
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
                value: 'This method only records the location of the node that was first loaded, for example, if you refresh the browser on any page, it will cause the node to relabel the location.'
            }
        ]
    ]
};
