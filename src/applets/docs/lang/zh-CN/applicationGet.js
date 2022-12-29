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
                value: '获得程序卡对象 Applet。'
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
                value: '“id”为要获取的程序卡名。'
            },
            {
                type: 'text',
                value: '其返回为一个 Promise。'
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
                value: '删除一个程序卡对象 Applet。'
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
                value: '“id”为要删除的程序卡名。'
            },
            {
                type: 'text',
                value: '其返回为一个 Promise，删除成功你将获得 true。'
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
                value: '增加一个程序卡对象 Applet。'
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
                value: '“id”为要新增的程序卡名。'
            },
            {
                type: 'text',
                value: '其返回为新程序卡对象 Applet。'
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
