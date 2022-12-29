export default {
  title: 'Application.updateGlobalCSSVariables',
  content: [
    [
      {
        type: 'title',
        value: 'Application.updateGlobalCSSVariables'
      },
      {
        type: 'sub',
        value: 'Application.updateGlobalCSSVariables'
      },
      {
        type: 'text',
        value: '更新应用的全局 CSS 变量（受同源策略限制）。'
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
            type ApplicationSafeAreaValue = string | Array<string>
            type updateSafeArea = (data: ApplicationSafeAreaValue) => void
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
        value: '执行更新时，所有生命周期内的模块都将进行实时的样式变量更新。'
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
            application.updateGlobalCSSVariables({
              '---common-button-color': '#000000',
              '---common-button-width': '100%',
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
        value: '跨域模块页面需要自行处理，处理方法请参考 Application.updateSafeArea 相关介绍。'
      }
    ]
  ]
}