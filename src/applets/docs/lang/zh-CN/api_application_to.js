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
                value: '转场到指定程序卡。'
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
                value: '跳转到指定 id 的程序卡。'
            },
            {
                type: 'text',
                value: '<b>param</b>'
            },
            {
                type: 'text',
                value: '跳转程序卡所携带的参数（参数字符串）。'
            },
            {
                type: 'text',
                value: '<b>history</b>'
            },
            {
                type: 'text',
                value: '为 -1 时不推入到历史记录，为 0 时替换当前历史记录，为 1 时推入新的历史记录。'
            },
            {
                type: 'text',
                value: '<b>touches</b>'
            },
            {
                type: 'text',
                value: '为发生点击行为的元素点击的 TouchEvent 对象，或直接定义的发生事件 x, y 坐标值的 TransformActionOrigin 对象，用做某些需要根据起始位置而发生的转场动画。'
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
                value: '该函数为一个异步函数，若访问程序卡不存在则会尝试进入 404程序卡， 并将原有携带参以及通过参数“__notFoundId”将该模块 id，一并传递给 404 程序卡。'
            }
        ]
    ]
};
