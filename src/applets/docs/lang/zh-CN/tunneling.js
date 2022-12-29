"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Tunneling',
    content: [
        [
            {
                type: 'title',
                value: 'Tunneling'
            },
            {
                type: 'sub',
                value: 'PresetConfig > tunneling'
            },
            {
                type: 'text',
                value: '设定应用为“隧穿模式”。（应用启动前的预配置项）'
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
                value: "\n          <code-highlight type=\"ts\">\n            interface PresetConfig {\n              tunneling?: boolean\n            }\n          </code-highlight>\n        "
            },
            {
                type: 'hr'
            },
            {
                type: 'text',
                value: '<h3>Details</h3>'
            },
            {
                type: 'tips',
                value: '若在当前域下访问跨域的程序卡，此时会因同源策略导致跨域的程序卡无法实现，全局样式变量更新以及[Apply]中的能力（比如新开窗口）。'
            },
            {
                type: 'text',
                value: '通过将跨域程序卡页面接入 Lath，并开启 [tunneling]来解决跨域程序卡页面的一些受限能力。'
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
                value: "\n          <code-highlight type=\"ts\">\n            createApplication({\n              tunneling: true,\n              applets: {\n                ...\n              }\n            })\n          </code-highlight>\n        "
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
                value: '当页面接入 Lath 且开启 [tunneling] 时，页面本身即为一个单独应用，但当该页面嵌入到另一个 Lath 应用作为程序卡时，其通过 A链接（即pushWindow）打开的页面将不会在本应用内打开，而是被代理到父级应用中打开，若父级应用也是被嵌入的 Lath 应用，且也开启了 [tunneling] 则会继续向上“隧穿”。'
            }
        ]
    ]
};
