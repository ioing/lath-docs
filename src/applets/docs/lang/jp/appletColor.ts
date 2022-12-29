export default {
  title: 'Applet.color',
  content: [
    [
      {
        type: 'title',
        value: 'Applet.color'
      },
      {
        type: 'sub',
        value: 'Applet.color'
      },
      {
        type: 'text',
        value: 'プログラムカードの背景色。'
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
            type color = string
          </code-highlight>
        `
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>詳細</h3>'
      },
      {
        type: 'text',
        value: '色はconfigの構成に由来します。構成されていない場合は、フレームワークアプレットの色設定に戻ります。それでも構成または継承されていない場合は、ブラウザが暗いかどうかに応じて白黒で返されます。モード。'
      },
      {
        type: 'hr'
      },
      {
        type: 'text',
        value: '<h3>例</h3>'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            const applet = await application.get('home')
            console.log(applet.color)
          </code-highlight>
        `
      }
    ]
  ]
}