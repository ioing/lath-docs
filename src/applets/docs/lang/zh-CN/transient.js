"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Transient',
    content: [
        [
            {
                type: 'title',
                value: 'Transient'
            },
            {
                type: 'sub',
                value: 'AppletConfig > transient'
            },
            {
                type: 'text',
                value: '标记该程序卡为临时模块。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              transient?: boolean\n            }\n          </code-highlight>\n        "
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
                value: '在程序卡切换到后台时，会被立即销毁，并同时删除程序卡的所有临时配置数据。'
            },
            {
                type: 'text',
                value: '通过新窗口打开（A链接 或 API - pushWindow）的 url 类型程序卡（即无自定义配置的临时模块），会被自动进行该标记。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              applets: {\n                demoPage: {\n                  config: {\n                    transient: true\n                  }\n                }\n              }\n            })\n          </code-highlight>\n        "
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
                value: '一般当你的程序卡不存在重复利用时可使用该参数，比如无法枚举的通过动态生成的程序卡。'
            },
            {
                type: 'tips',
                value: '该配置项的意义是什么？当 A链接所访问的生成模块时，由于链接无法枚举，因此会累积很多无用的程序卡配置，因此开启该选项能够消除这些无意义的内存消耗。'
            }
        ],
        [
            {
                type: 'title',
                value: 'DisableTransient'
            },
            {
                type: 'sub',
                value: 'AppletConfig > disableTransient'
            },
            {
                type: 'text',
                value: 'DisableTransient 和 Transient 相呼应，可通过此参数来关闭默认的 Transient 行为。'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface AppletBaseConfig {\n              disableTransient?: boolean\n            }\n          </code-highlight>\n        "
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
                value: '若在某种特殊情境下，模块无须定义任何配置（或开发者懒于设置）而实际上模块是可枚举的（自动生成的配置也是有意义的，其存在重用的可能而并非临时程序卡），因此配置该选项时可关闭自动清除生成的程序卡配置的机制。'
            },
        ]
    ]
};
