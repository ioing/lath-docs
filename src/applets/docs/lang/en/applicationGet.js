"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Application.get/add/del',
    content: [
        [
            {
                type: 'title',
                value: 'Application.get'
            },
            {
                type: 'sub',
                value: 'Application.get'
            },
            {
                type: 'text',
                value: 'Obtain the Applet Object.'
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
                value: "\n          <code-highlight type=\"ts\">\n            type get = (id: string) => Promise&lt;Applet>\n          </code-highlight>\n        "
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
                value: '\"id\" is the Applet name to be obtained.'
            },
            {
                type: 'text',
                value: '\'Promise\' returned.'
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
                value: "\n          <code-highlight type=\"ts\">\n            const home = await application.get('home')\n          </code-highlight>\n        "
            }
        ],
        [
            {
                type: 'title',
                value: 'Application.del'
            },
            {
                type: 'sub',
                value: 'Application.del'
            },
            {
                type: 'text',
                value: 'Delete an Applet object.'
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
                value: "\n          <code-highlight type=\"ts\">\n            type del = (id: string) => Promise&lt;boolean>\n          </code-highlight>\n        "
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
                value: '\"id\" is the name of the Applet to be removed.'
            },
            {
                type: 'text',
                value: '\'Promise\' is returned, and you will get \'true\' if the deletion is successful.'
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
                value: "\n          <code-highlight type=\"ts\">\n            const isDel = await application.del('demo')\n          </code-highlight>\n        "
            }
        ],
        [
            {
                type: 'title',
                value: 'Application.add'
            },
            {
                type: 'sub',
                value: 'Application.add'
            },
            {
                type: 'text',
                value: 'Add an Applet object.'
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
                value: "\n          <code-highlight type=\"ts\">\n            declare interface AppletManifest {\n              config: AppletConfig\n              resources?: AppletResources\n              components?: ((w: Window) => CustomElementConstructor)[]\n              events?: Partial<AppletEvents>\n            }\n            type add = (id: string, manifest: AppletManifest) => Applet\n          </code-highlight>\n        "
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
                value: '\"id\" is the new Applet name.'
            },
            {
                type: 'text',
                value: 'New Applet object returned.'
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
                value: "\n          <code-highlight type=\"ts\">\n            const newApplet = await application.add('demo', {\n              config: {\n                title: 'title',\n                ...\n              }\n            })\n          </code-highlight>\n        "
            }
        ]
    ]
};
