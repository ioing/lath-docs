"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Install & Preface',
    content: [
        [
            {
                type: 'title',
                value: '安装'
            },
            {
                type: 'text',
                value: '使用 <b>npm / yarn</b> 安装'
            },
            {
                type: 'code',
                value: "\n          <code-highlight type=\"bash\">\n            $ npm install lath --save\n            // or\n            $ yarn add lath\n          </code-highlight>\n        "
            },
            {
                type: 'text',
                value: 'Lath(中文名：板条) 是一个体验增强容器，其初始依赖非常小，仅有 <b>5kb</b> 左右。它的核心能力都是原子化的，只有在被需要时才会动态载入依赖。'
            }
        ],
        [
            {
                type: 'title',
                value: '为什么使用它？'
            },
            {
                type: 'text',
                value: '它能让你的页面体验更上一阶，实现媲美原生 Apps 的效果，比如<a to-applet="doc?id=modality" clone-as="popDoc">预载二级页面</a>，<a to-applet="doc?id=pullToRefresh" clone-as="popDoc">Pop Sheet</a> 交互效果，<a to-applet="doc?id=pullToRefresh" clone-as="popDoc">平滑无闪烁下拉刷新</a>，实现无缝的<a to-applet="doc?id=presetEffect" clone-as="popDoc">页面转场效果</a>以及流畅的<a to-applet="doc?id=presetEffect" clone-as="popDoc">页面横滑效果</a>等等诸多实现方案。'
            },
            {
                type: 'text',
                value: '当你要获得这一切时并无需对原有逻辑和框架做出改变，甚至在初始页面的加载时也不会有对页面性能产生阻塞。'
            },
            {
                type: 'text',
                value: 'Lath 在窗口管理上有着非常优秀的设计，不仅能自动帮你进行资源回收，还能对页面间的事件进程进行自动管控，用它创建的应用是真正能达到媲美 Native Apps 的 Web App。'
            },
            {
                type: 'text',
                value: '接下来就开始上手吧！'
            }
        ]
    ]
};
