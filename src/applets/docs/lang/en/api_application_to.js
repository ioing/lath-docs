"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Application.to',
    content: [
        [
            {
                type: 'title',
                value: 'Application.to'
            },
            {
                type: 'sub',
                value: 'Application.to'
            },
            {
                type: 'text',
                value: 'Transform to the specified Applet.'
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
                value: "\n          <code-highlight type=\"ts\">\n            type TransformToOptions = [\n              id: string,\n              param?: string,\n              history?: -1 | 0 | 1,\n              touches?: TouchEvent | TransformActionOrigin\n            ]\n            type to = (...args: TransformToOptions) => Promise<void>\n          </code-highlight>\n        "
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
                value: '<b>id</b>'
            },
            {
                type: 'text',
                value: 'Jump to the Applet with the specified \'id\'.'
            },
            {
                type: 'text',
                value: '<b>param</b>'
            },
            {
                type: 'text',
                value: 'The parameter carried by the jumper card (parameter string).'
            },
            {
                type: 'text',
                value: '<b>history</b>'
            },
            {
                type: 'text',
                value: 'The parameter is at\'-1\', it would not be pushed to history; at \'0\', then it would replace the current history; and at \'1\' it would be pushed in a new history.'
            },
            {
                type: 'text',
                value: '<b>touches</b>'
            },
            {
                type: 'text',
                value: '\'TouchEvent\' objects that are clicked on elements that occur in click-through behavior, or \'TransformActionOrigin\' objects that directly define the coordinate values of the occurrence event x, y, are used to animate some transitions that need to occur depending on the starting position.'
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
                value: "\n          <code-highlight type=\"ts\">\n            application.to('home', '?id=100', 1)\n          </code-highlight>\n        "
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
                value: 'The function is an asynchronous function, if the access Applet does not exist, it will try to enter the 404 Applet, and pass the original carrying parameter and the module id through the parameter "__notFoundId" to the 404 Applet.'
            }
        ]
    ]
};
