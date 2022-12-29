export default {
  title: 'HoldBack',
  content: [
    [
      {
        type: 'title',
        value: 'HoldBack'
      },
      {
        type: 'sub',
        value: 'FrameworksAppletConfig > holdBack'
      },
      {
        type: 'text',
        value: '阻止主程序退出。（frameworks 程序卡专属配置）'
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
              holdBack?: (backoutCount: number) => boolean
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
        value: '需配合 [singleLock] 开启时有效，当用户进行返回操作，且页面即将退出时，会通过该函数（如果被阻止，backCount 为点击返回的次数）进行校验，返回 true 时为阻止应用页面退出，否则会允许应用的直接退出。'
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
        value: '如上配置，从其它页面跳转进入到应用时，当点击浏览器返回按钮时并不会退出应用页面，而是会通过 Frameworks Applet 中的 [holdBack] 配置进行判断是否应该被退出，并同时返回用户点击返回按钮的次。'
      }
    ]
  ]
}