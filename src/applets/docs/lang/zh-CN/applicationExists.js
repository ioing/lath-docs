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
                value: '取得当前页面是否为首次载入的历史序列上。'
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
                value: '当你首次访问链接进入应用时，Lath 会记录你当前历史节点的位置，凡是发生页面活动后都可以检测当前位置是否发生了变动，如果该值为 false，则表示历史已经发生变化，即当前历史非首次进入的历史。'
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
                value: '该方法仅记录初次载入的节点位置，例如你在任何页面发生浏览器刷新都会导致该节点重新标记位置。'
            }
        ]
    ]
};
