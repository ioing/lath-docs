export default {
  title: 'Application Events',
  content: [
    [
      {
        type: 'title',
        value: 'Application Events'
      },
      {
        type: 'sub',
        value: 'Application > on'
      },
      {
        type: 'text',
        value: '常用事件监听（on, one, off）。'
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
            type ApplicationSafeAreaValue = string | Array&lt;string>
            type GlobalCSSVariables = { [key: string]: string }
            type TriggerEventArgsMap = {
              'safeAreaChange': [ApplicationSafeAreaValue],
              'globalCSSVariablesChange': [GlobalCSSVariables],
              'transformStart': [Applet[]],
              'transformEnd': [Applet[]],
              'systemDidMount': [Applet],
              'frameworksDidMount': [Applet],
              'pullToRefreshReady': [],
              'exit': [{ backoutCount: number }],
              'back': [Applet],
              'error': [e: unknown]
            }
            type TriggerEventTypes = keyof TriggerEventArgsMap
            type TriggerEventCallbackArgs&lt;N extends TriggerEventTypes> = TriggerEventArgsMap[N]
            type TriggerEventCallback&lt;N extends TriggerEventTypes> = (...args: TriggerEventArgsMap[N]) => void
            type TriggerEventTypesCallbacks = Record&lt;TriggerEventTypes, TriggerEventCallback&lt;keyof TriggerEventArgsMap>>
            type on = &lt;T extends TriggerEventTypes, F extends TriggerEventCallback&lt;T>>(type: T, fn: F, groupName?: string) => this
            type off = &lt;T extends TriggerEventTypes, F extends TriggerEventCallback&lt;T>>(type: T, fn: F) => this
            type one = on
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
        value: '<b>safeAreaChange</b>'
      },
      {
        type: 'text',
        value: '可监听安全边距更新，若 updateSafeArea 被调用时通知，返回安全边距对象。'
      },
      {
        type: 'text',
        value: '<b>globalCSSVariablesChange</b>'
      },
      {
        type: 'text',
        value: '可监听全局样式变量更新，若 updateGlobalCSSVariables 被调用时通知，返回更新样式变量对象。'
      },
      {
        type: 'text',
        value: '<b>transformStart</b>'
      },
      {
        type: 'text',
        value: '当发生窗口切换前将通知，返回窗口程序卡数组。'
      },
      {
        type: 'text',
        value: '<b>transformEnd</b>'
      },
      {
        type: 'text',
        value: '当发生窗口切换完成时将通知，返回窗口程序卡数组。'
      },
      {
        type: 'text',
        value: '<b>systemDidMount</b>'
      },
      {
        type: 'text',
        value: '当系统程序卡执行完成时将通知，并返回 System Applet。'
      },
      {
        type: 'text',
        value: '<b>frameworksDidMount</b>'
      },
      {
        type: 'text',
        value: '当框架程序卡执行完成时将通知，并返回 Frameworks Applet。'
      },
      {
        type: 'text',
        value: '<b>pullToRefreshReady</b>'
      },
      {
        type: 'text',
        value: '当配置使用了下拉刷新，且下拉刷新原子能力准备完成时发出通知。'
      },
      {
        type: 'text',
        value: '<b>exit</b>'
      },
      {
        type: 'text',
        value: '当程序触发退出应用时发出通知，返回尝试退出累积次数。'
      },
      {
        type: 'text',
        value: '<b>back</b>'
      },
      {
        type: 'text',
        value: '当程序触发历史返回时通知，返回目标 Applet。'
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
            const { application } = await createApplication({
              applets: {
                ...
              }
            })
            application.on('frameworksDidMount', () => {
              //...
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
        value: 'Application Events 上的事件使用场景一般不高，比较常用的事件在 Applet Events 上的比较多一些。'
      }
    ]
  ]
}