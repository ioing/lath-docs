export default {
  title: 'SingleLock',
  content: [
    [
      {
        type: 'title',
        value: 'SingleLock'
      },
      {
        type: 'sub',
        value: 'FrameworksAppletConfig > singleLock'
      },
      {
        type: 'text',
        value: '当程序卡回退到程序出口（level === 0 的程序卡）时，进行返回操作时组织历史继续回退。'
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
            interface FrameworksAppletConfig {
              singleLock?: boolean
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
        value: '当回退被锁定时，继续回退会开始记录回退次数，并可通过 frameworks Applet 中的 [holdBack] 配置来决定程序卡是否允许退出。'
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
                frameworks: {
                  config: {
                    singleLock: true,
                    holdBack: (event) => {
                      // 判断是否退出
                      return true
                    }
                  }
                }
              }
            })
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: '如上配置，从其它页面跳转进入到应用时，当点击浏览器返回按钮时并不会退出应用页面，而是会通过 Frameworks Applet 中的 [holdBack] 配置进行判断是否应该被退出，并同时返回用户点击返回按钮的次数。'
      }
    ]
  ]
}