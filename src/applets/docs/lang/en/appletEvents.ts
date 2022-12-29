export default {
  title: 'Applet Events',
  content: [
    [
      {
        type: 'title',
        value: 'Applet Events'
      },
      {
        type: 'sub',
        value: 'Applet > on'
      },
      {
        type: 'text',
        value: 'Common event listeners (on, one, off).'
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
              show: [],
              hide: [],
              willShow: [],
              willHide: [],
              destroy: [],
              pullToRefreshEnd: [],
              pullToRefreshCancel: [],
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
        value: '<b>show</b>'
      },
      {
        type: 'text',
        value: 'The Applet is displayed.'
      },
      {
        type: 'text',
        value: '<b>hide</b>'
      },
      {
        type: 'text',
        value: 'The Applet disappears.'
      },
      {
        type: 'text',
        value: '<b>willShow</b>'
      },
      {
        type: 'text',
        value: 'The Applet is about to appear.'
      },
      {
        type: 'text',
        value: '<b>willHide</b>'
      },
      {
        type: 'text',
        value: 'The Applet is about to disappear.'
      },
      {
        type: 'text',
        value: '<b>destroy</b>'
      },
      {
        type: 'text',
        value: 'The Applet is destroyed.'
      },
      {
        type: 'text',
        value: '<b>pullToRefreshEnd</b>'
      },
      {
        type: 'text',
        value: 'The Applet drop-down refresh ends.'
      },
      {
        type: 'text',
        value: '<b>pullToRefreshCancel</b>'
      },
      {
        type: 'text',
        value: 'The Applet drop-down refresh cancels.'
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
            const applet = await application.get('home')
            applet.on('willShow', () => {
              //...
            })
          </code-highlight>
        `
      }
    ]
  ]
}