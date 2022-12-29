"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Level',
    content: [
        [
            {
                type: 'title',
                value: 'Level'
            },
            {
                type: 'sub',
                value: 'AppletConfig > level'
            },
            {
                type: 'text',
                value: 'The Applet View Window displays the hierarchy.'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              level?: number\n            }\n          </code-highlight>\n        "
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
                value: 'Generally, the level of the above-the-fold Applet is 0, and it increases gradually according to the access depth.'
            },
            {
                type: 'text',
                value: 'The Applet hierarchy will also reflect the effect of the transition animation: from small to large, it is a forward animation； and vice versa, from large to small, it is a reverse animation.'
            },
            {
                type: 'text',
                value: 'When the history rolls back to the Applet with level 0, the singleLock event will be triggered. For details, please refer to the relevant description in the [singleLock] configuration.'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                home: {\n                  config: {\n                    level: 1\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: 'If the two modules to be jumped are modules of the same level, the transition animation effect will be automatically turned off.'
            },
            {
                type: 'tips',
                value: 'Why are sibling module animations turned off? The main scene when the animation of the same level module is turned off is for tab switching. Generally, a window animation effect is not required for tab switching, but animation effects may be required when switching from windows at other level.'
            }
        ]
    ]
};
