export default {
  title: 'AllowHost',
  content: [
    [
      {
        type: 'title',
        value: 'AllowHost'
      },
      {
        type: 'sub',
        value: 'frameworksAppletConfig > allowHost'
      },
      {
        type: 'text',
        value: '[capture]が設定されていない場合、安全でないホストアドレスはこの構成で除外できます。設定されていない場合、制限されません。 （フレームワークプログラムカード専用構成）'
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
            interface AppletBaseConfig {
              allowHost?: Array&lt;string>
            }
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
        value: 'この構成は主に、URLパラメータをつなぎ合わせて害を防ぐことにより、アプリケーションが外国のWebサイトにアクセスするのを防ぐために使用されます。'
      },
      {
        type: 'text',
        value: 'フレームワークモジュールに[キャプチャ]が設定されている場合、この構成は無視されます。'
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
                  allowHost: [
                    'aaa.com',
                    'bbb.com',
                    'ccc.com'
                  ]
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
        value: '<h3>ノート</h3>'
      },
      {
        type: 'text',
        value: '通常、プログラムカードページのAリンクのジャンプ動作は、アプリケーションの新しいウィンドウが開くと自動的にキャプチャされますが、すべての場合にこれが予期されない場合があるため、このオプションを使用して、有効領域を制御できます。ドメインが一致しない場合、アプリケーションで新しいウィンドウを開くことはありませんが、アクセスするために新しいブラウザウィンドウを直接開きます。'
      },
      {
        type: 'tips',
        value: 'アプリケーションにユーザーが入力したアクセス可能なアドレスがある場合、新しいページを新しいブラウザウィンドウとして強制的にアクセスするには、この構成が必要になる可能性があります。'
      }
    ]
  ]
}