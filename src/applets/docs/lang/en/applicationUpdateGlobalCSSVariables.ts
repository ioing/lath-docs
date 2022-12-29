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
        value: 'Update the app\'s global CSS variables (subject to the same-origin policy).'
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
        value: 'When an update is performed, all modules within the lifecycle are updated with real-time style variables.'
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
        value: 'The cross-domain module page needs to be handled by itself, please refer to \'Application.updateSafeArea\'.'
      }
    ]
  ]
}