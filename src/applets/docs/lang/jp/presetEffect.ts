export default {
  title: 'Animate Effect',
  content: [
    [
      {
        type: 'title',
        value: 'Animate Effect'
      },
      {
        type: 'sub',
        value: 'AppletConfig > animation'
      },
      {
        type: 'text',
        value: '程序卡窗口转场预置动画效果。'
      },
      {
        type: 'text',
        value: `
          左侧滑动 <a href="#empty" preset-effect="slide-left" clone-as="empty-left">slide-right</a>、
          右侧滑动 <a href="#empty" preset-effect="slide-right" clone-as="empty-right">slide-right</a>、
          上侧滑动 <a href="#empty" preset-effect="slide-up" clone-as="empty-up">slide-up</a>、
          下侧滑动 <a href="#empty" preset-effect="slide-down" clone-as="empty-down">slide-down</a>、
          放大镜 <a href="#empty" preset-effect="zoom" clone-as="empty-zoom">zoom</a>、
          翻转 <a href="#empty" preset-effect="flip" clone-as="empty-flip">flip</a>、
          左侧翻转 <a href="#empty" preset-effect="flip-left" clone-as="empty-flip-left">flip-left</a>、
          右侧翻转 <a href="#empty" preset-effect="flip-right" clone-as="empty-flip-right">flip-right</a>、
          上侧翻转 <a href="#empty" preset-effect="flip-up" clone-as="empty-flip-up">flip-up</a>、
          下侧反转 <a href="#empty" preset-effect="flip-down" clone-as="empty-flip-down">flip-down</a>、
          渐变 <a href="#empty" preset-effect="fade" clone-as="empty-fade">fade</a>
        `
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
        value: `
          <code-highlight type="ts">
            type AnimationPrestType = 'inherit'
            | 'fade' | 'zoom' | 'pop-sheet'
            | 'flip' | 'flip-left' | 'flip-down' | 'flip-right' | 'flip-up'
            | 'slide' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down'
            interface AppletBaseConfig {
              animation?: AnimationPrestType
            }
          </code-highlight>
        `
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
        value: 'Lath 提供了常见的动画效果选择，只需指定你预置的效果名即可实现炫酷的窗口动画。'
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
        value: `
          <code-highlight type="ts">
            createApplication({
              applets: {
                home: {
                  config: {
                    animation: 'slide'
                  }
                }
              }
            })
          </code-highlight>
        `
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
        value: '未设置程序卡动画效果时会默认继承 frameworks 程序卡中的动画效果。'
      },
      {
        type: 'text',
        value: '未被定义为程序卡的超链接新开窗口时的默认窗口效果为 slide。'
      },
      {
        type: 'tips',
        value: '每个预制的动画都包涵一个前进动画以及倒退动画，采用哪种效果将会受到你浏览历史的方向以及程序卡之间的[level]层级所决定。'
      }
    ]
  ]
}