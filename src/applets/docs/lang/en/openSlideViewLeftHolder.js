"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'OpenSlideViewLeftHolder',
    content: [
        [
            {
                type: 'title',
                value: 'OpenSlideViewLeftHolder'
            },
            {
                type: 'sub',
                value: 'AppletConfig > openSlideViewLeftHolder'
            },
            {
                type: 'text',
                value: '开启后，在 SlideView 效果下（defaultSlideViewApplets 配置时），最左侧边缘滑动时会允许退出应用。\'When enabled, under the \'SlideView\' effect (when \'defaultSlideViewApplets\' is configured), the leftmost edge will allow to exist the application when swiping.'
            },
            {
                type: 'tips',
                value: 'This configuration is mainly used to unblock the exit under the first history record. If the browsing history is greater than 1, there is no edge sliding blockage in most cases. If it is not enabled, the edge elasticity may occur in iOS devices when edge sliding without falling back to the previous level.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              openSlideViewLeftHolder?: boolean\n            }\n          </code-highlight>\n        "
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
                value: '该值默认为 false。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    defaultSlideViewApplets: [\n                      {\n                        id: \"appletA\",\n                        activate: 'instant'\n                      },\n                      {\n                        id: \"appletB\",\n                        activate: 'lazy'\n                      }\n                    ],\n                    openSlideViewLeftHolder: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'When this option is turned on, it should be noted that a 20px non-feedback area will be generated on the left edge of the Applet, and this safe operating distance should be reserved during development.'
            }
        ]
    ]
};
