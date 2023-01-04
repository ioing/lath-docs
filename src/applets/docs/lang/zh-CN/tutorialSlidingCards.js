"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    title: 'Tutorial',
    figure: "\n    <div class=\"figure\">\n      <h2>\u591A\u7A0B\u5E8F\u5361\u7247\u95F4\u6A2A\u6ED1\uFF0C\u4E0D\u5361\u987F\u4E0D\u6389\u5E27</h2>\n      <p>\u652F\u6301\u624B\u52BF\u4E0E\u4E8B\u4EF6\u9A71\u52A8</p>\n    </div>\n    <style>\n      body {\n        transition: all .2s ease;\n      }\n      .figure {\n        margin: -20px -12px 20px;\n        min-height: 225px;\n        scroll-snap-align: start;\n        display: flex;\n        align-items: left;\n        justify-content: left;\n        text-align: left;\n        position: relative;\n        padding: 0 30px;\n        border-radius: 8px;\n        box-sizing: border-box;\n        flex-direction: column;\n        cursor: pointer;\n        filter: brightness(0.9);\n        background-image: linear-gradient(353deg,#580303,#d10000);\n        transition: all .2s ease;\n      }\n      .figure h2 {\n        margin: 30px 0 60px;\n        font-size: 32px;\n        max-height: 270px;\n        text-overflow: ellipsis;\n        box-orient: vertical;\n        -webkit-box-orient: vertical;\n        line-clamp: 6;\n        -webkit-line-clamp: 6;\n        overflow: hidden;\n        color: #fff;\n        transition: all .2s ease;\n      }\n      .figure p {\n        position: absolute;\n        bottom: 15px;\n        max-width: 250px;\n        margin: 0;\n        font-size: 14px;\n        text-align: left;\n        color: rgba(255, 255, 255, .5);\n        transition: all .2s ease;\n      }\n    </style>\n  ",
    content: [
        [
            {
                type: 'title',
                value: '制作滑动卡片效果'
            },
            {
                type: 'brief',
                value: '滑动切卡效果就是将多个 Applet 并排一列，通过左右的滑动手势实现 Applet 之间的切换。'
            },
            {
                type: 'text',
                value: "\n          <div style=\"display: flex; width: 100%; box-sizing: border-box; height: 300px; padding: 10px; border-radius: 18px; background: linear-gradient(300deg, rgb(0, 164, 255, 0.27), #ff8351);transform: translate3d(10px, 10px, 10px) perspective(1000px) rotateX(10deg) rotateY(50deg);\">\n            <div style=\"min-width: 90%; height: 260px; border-radius: 18px; margin: 10px 0 0 -50%; border: 1px solid rgba(0,0,0,.1); background: rgb(0, 164, 255, 0.27); color: #fff2ee70; backdrop-filter: saturate(180%) blur(5px); line-height: 260px; font-size: 80px; text-indent: 20px;\">PageA</div>\n            <div style=\"min-width: 90%; height: 260px; border-radius: 18px; margin: 10px 0 0 10px; border: 1px solid rgba(0,0,0,.1); background: rgb(0, 164, 255, 0.27); color: #3a1500; backdrop-filter: saturate(180%) blur(5px); line-height: 260px; font-size: 70px; text-indent: 20px;\">PageB</div>\n          </div>\n        "
            },
            {
                type: 'text',
                value: '这会很容易让我们联想到 <b>Tab</b> 功能，但他们存在一些微的小区别，比如 Tab 一般是不具有滑动手势的。'
            },
            {
                type: 'text',
                value: '我们在实现这个效果前需要确定滑动卡片的效果是由哪个视图承接的，即实现该效果的 Applet 是谁，同时在这个视图中所嵌套的并排可滑动的 Applet 是谁？确定好这些之后我们就可以开始创建效果了，用到配置项 <a to-applet="docs?id=defaultSlideViewApplets">defaultSlideViewApplets</a>'
            },
            {
                type: 'text',
                value: '假使我们有三个 Applet 分别命名为 A、 B 、C，我们希望有一个视图可以同时承载 ABC 三个 Applet，并使它们能够呈现 Slider 效果。'
            },
            {
                type: 'text',
                value: '我们新建一个 Applet D，它并不具备任何自身的视图，而仅是作为空容器将 ABC三个 Applet 引入进来，那么此时我们导航进入到 D时就可看到一个 Slider 效果的视图了，如果我们希望访问到 B，则只需先访问 D 再访问 B，若已经存在 D 则可直接访问 B 即可。'
            },
            {
                type: 'code',
                value: "\n        <code-highlight type=\"ts\">\n          createApplication({\n            applets: {\n              frameworks: {\n                config: {\n                  index: 'D'\n                }\n              },\n              A: {\n                config: {\n                  source: {\n                    src: './a.html'\n                  }\n                }\n              },\n              B: {\n                config: {\n                  source: {\n                    src: './b.html'\n                  }\n                }\n              },\n              C: {\n                config: {\n                  source: {\n                    src: './c.html'\n                  }\n                }\n              },\n              D: {\n                config: {\n                  defaultSlideViewApplets: [\n                    {\n                      id: \"A\",\n                      activate: 'instant'\n                    },\n                    {\n                      id: \"B\",\n                      activate: 'lazy'\n                    },\n                    {\n                      id: \"C\",\n                      activate: 'lazy'\n                    }\n                  ]\n                }\n              }\n            }\n          })\n        </code-highlight>\n        "
            },
        ]
    ]
};
