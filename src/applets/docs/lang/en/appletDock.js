"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Applet.dock',
    content: [
        [
            {
                type: 'title',
                value: 'Applet.dock'
            },
            {
                type: 'sub',
                value: 'Applet.dock'
            },
            {
                type: 'text',
                value: '程序坞的控制对象（Applet Snap 效果的模块切换器对象）。\'The dock\'s control object (the module switcher object for the Applet Snap effect).'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface Dock {\n              to: (id: number | string) => Promise&lt;unknown> \n              index: number\n            }\n          </code-highlight>\n        "
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
                value: 'The "to" function is capable of accepting a sequence (corresponding to the sequence of modules in the configuration item \'defaultDockApplets\') / module id.'
            },
            {
                type: 'text',
                value: 'The "index" property gets the sequence of Applets that are currently active on the Dock.'
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
                value: "\n          <code-highlight type=\"ts\">\n            const applet = await application.get('home')\n            await applet.dock.to('pageA')\n            console.log(applet.dock.index)\n          </code-highlight>\n        "
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
                value: 'Dock object, that is, the dock, for its creation refer to the configuration item:\'DefaultDockApplets\'.'
            }
        ]
    ]
};
