export default {
  title: 'Install & Preface',
  content: [
    [
      {
        type: 'title',
        value: '安装'
      },
      {
        type: 'text',
        value: '使用 npm / yarn 安装'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="bash">
            $ npm install lath --save
            // or
            $ yarn add lath
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: 'Lath 是一个体验增强容器，其初始依赖非常小，仅有 1kb 左右。它的核心能力都是原子化的，只有在被需要时才会动态载入依赖。'
      }
    ],
    [
      {
        type: 'title',
        value: '为什么使用它？'
      },
      {
        type: 'text',
        value: '它能让你的页面体验更上一阶，实现媲美原生 Apps 的效果，比如预载二级页面，Sheets Bottom 交互效果，平滑无闪烁下拉刷新，实现无缝的页面切换特效以及流畅的页面横滑效果等。当你获得这一切时并无需对原有逻辑和框架做出改变，甚至在初始页面的加载时也不会有任何阻塞。'
      },
      {
        type: 'text',
        value: 'Lath 在窗口管理上有着非常优秀的设计，不仅能自动帮你进行资源回收，还能对页面间的事件进程进行自动管控，真正达到类 Native Apps 的 Web App。'
      },
      {
        type: 'text',
        value: '接下来就开始上手吧！'
      }
    ]
  ]
}