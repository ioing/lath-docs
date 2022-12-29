export default {
  title: 'Application.install',
  content: [
    [
      {
        type: 'title',
        value: 'Application.install'
      },
      {
        type: 'sub',
        value: 'Application.install'
      },
      {
        type: 'text',
        value: '通过 ServiceWorker 安装应用。'
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
            declare interface RegistrationOptions {
              scope?: string
            }
            type install = (scriptURL: string, options: RegistrationOptions, source: Array<string>, version: string) => Promise&lt;ServiceWorkerRegistration>
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
        value: 'ServiceWorker 能加速你应用的二次访问速度，并在弱网甚至无网环境下可打开。'
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
                    level: 1
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
        value: '关于 ServiceWorker 请参照 W3C 介绍。'
      }
    ]
  ]
}