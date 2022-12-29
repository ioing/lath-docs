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
                value: '开启后，在 SlideView 效果下（defaultSlideViewApplets 配置时），最左侧边缘滑动时会允许退出应用。'
            },
            {
                type: 'tips',
                value: '该配置主要用于解除在首条历史记录下的退出受阻，若浏览历史记录大于 1 时则大多情况下不存在边缘滑动受阻的情况，若不开启则，在 ios 设备中可能出现边缘滑动时仅会触发边缘弹性，而不会回退到上一级。'
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
                value: '开启该选项后需要注意程序卡左侧边缘将产生 20px 的无反馈区域，开发时应注意预留该安全操作距离。'
            }
        ]
    ]
};
