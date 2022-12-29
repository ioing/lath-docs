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
                value: '程序卡视图窗口显示层级。'
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
                value: '一般首屏程序卡的层级为 0，根据访问深度而逐级增大。'
            },
            {
                type: 'text',
                value: '程序卡层级关系还将反应在转场动画的效果上，从小到大为正向动画，反之从大到小时为逆向动画。'
            },
            {
                type: 'text',
                value: '当历史回退到层级为 0 的程序卡时，会触发 singleLock 事件，具体可查看 [singleLock] 配置中的相关描述。'
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
                value: '若跳转的两个模块是为同层级模块，则转场动画效果会被自动关闭。'
            },
            {
                type: 'tips',
                value: '为什么同级模块动画关闭？：同级模块动画关闭主要场景是用于 tab 切换，一般 tab 切换时不需要一个窗口动画效果，但是从其它层级的窗口切换过来时可能又是需要动画效果的。'
            }
        ]
    ]
};
