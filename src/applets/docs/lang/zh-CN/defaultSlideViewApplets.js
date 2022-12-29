"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'DefaultSlideViewApplets',
    content: [
        [
            {
                type: 'title',
                value: 'DefaultSlideViewApplets'
            },
            {
                type: 'sub',
                value: 'AppletConfig > defaultSlideViewApplets'
            },
            {
                type: 'text',
                value: 'Snap 切换效果的程序坞，我们称之为 SlideView。'
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
                value: "\n          <code-highlight type=\"ts\">\n            type SlideViewApplets = Array<{\n              id: string,\n              activate: 'lazy' | 'instant' | 'passive'\n            }>\n            interface AppletBaseConfig {\n              defaultSlideViewApplets?: SlideViewApplets\n            }\n          </code-highlight>\n        "
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
                value: '“id”表示要被加载的程序卡名'
            },
            {
                type: 'text',
                value: '“activate”表示程序卡的激活类型，共分为以下三种：'
            },
            {
                type: 'text',
                value: "\n          <ul>\n            <li>lazy: \u5728\u6D4F\u89C8\u5668\u7A7A\u95F2\u65F6\u52A0\u8F7D Applet \u9875\u9762\u5185\u5BB9\u3002</li>\n            <li>instant: \u5373\u523B\u52A0\u8F7D Applet \u9875\u9762\u5185\u5BB9\u3002</li>\n            <li>passive: \u5728\u88AB\u6FC0\u6D3B\u65F6\u52A0\u8F7D Applet \u9875\u9762\u5185\u5BB9\u3002</li>\n          </ul>\n        "
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
                value: "\n        <code-highlight type=\"ts\">\n          createApplication({\n            applets: {\n              frameworks: {\n                config: {\n                  defaultSlideViewApplets: [\n                    {\n                      id: \"appletA\",\n                      activate: 'instant'\n                    },\n                    {\n                      id: \"appletB\",\n                      activate: 'lazy'\n                    }\n                  ]\n                }\n              }\n            }\n          })\n        </code-highlight>\n        "
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
                value: '设定 defaultSlideViewApplets 的程序卡将不再具有自身的视图（frameworks Applet 除外），而是其中嵌套了其它的程序卡视图，因此该配置与[source]相冲突，不应同时设置。'
            },
            {
                type: 'tips',
                value: '另外使用“API-Applet.slide.to”可使程序坞滑动到到指定程序卡位置。'
            }
        ],
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
