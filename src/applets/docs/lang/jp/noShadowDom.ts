export default {
  title: 'UnuseShadowDom',
  content: [
    [
      {
        type: 'title',
        value: 'UnusedShadowDom'
      },
      {
        type: 'sub',
        value: 'PresetConfig > noShadowDom'
      },
      {
        type: 'text',
        value: '框架是否使用 ShadowDom 模式。（应用启动前的预配置项）'
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
            interface PresetConfig {
              noShadowDom?: boolean
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
        type: 'tips',
        value: '关于 ShadowDom 的更多信息，请查看 W3C 的介绍。'
      },
      {
        type: 'text',
        value: '若你通过 createApplication 指定“index”的模式启动应用时，进行预置的程序卡节点会被直接移动到 ShadowDom 中，此时会造成存在节点外的样式及依赖缺失（比如一些依赖的脚本事件绑定元素和动态注入的全局样式等）。'
      },
      {
        type: 'text',
        value: '默认情况下 ShadowDom 模式已经时关闭的，你无需设定改选项，如果你不存在上述问题，且希切片的程序卡之间不会产生一些干扰，则可以关闭改选项，此时同页面中的切片产生的程序卡则互相之间产生作用域。'
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
              tunneling: true,
              applets: {
                ...
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
        value: '极少情况下会使用到该配置，当然如果你能使用 &lt;define-applet> 来代替将会是更好的选择。'
      }
    ]
  ]
}