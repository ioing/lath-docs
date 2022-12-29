export default {
  title: 'Resource',
  content: [
    [
      {
        type: 'title',
        value: 'Resource'
      },
      {
        type: 'sub',
        value: 'AppletManifest > resource'
      },
      {
        type: 'text',
        value: '程序卡运行时所依赖的静态资源。'
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
            interface AppletResources {
              script?: Array&lt;string>
              image?: Array&lt;string>
              worker?: Array&lt;string>
              video?: Array&lt;string>
              audio?: Array&lt;string>
              font?: Array&lt;string>
              style?: Array&lt;string>
              html?: Array&lt;string>
            }
            interface AppletManifest {
              resource?: AppletResources
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
        value: '从当前程序卡切换到下一程序卡时，若当前程序卡配置了预渲染依赖(prerender=[${nextApplet}])时，在下一个程序卡被加载前进行其静态资源的预载入，如 html 中的 script、css 标签等，对于这些内链的静态资源是无需进行声明配置的，但是对于页面运行期间通过脚本动态加载的内容，如 css 中的 font字体，动态产生的的媒体素材等，并不能完成预先的载入，此时则可通过 resource 配置项将可能发生加载的资源进行预载。'
      },
      {
        type: 'text',
        value: '程序卡层级关系还将反应在转场动画的效果上，从小到大为正向动画，反之从大到小时为逆向动画。'
      },
      {
        type: 'text',
        value: '当历史回退到层级为 0 的程序卡时，会触发 singleLock 事件，具体可查看 [singleLock] 配置中的相关描述。'
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
                  resource: [
                    image: [
                      'https://yourCDN.com/001.jpg',
                      'https://yourCDN.com/002.jpg',
                      'https://yourCDN.com/003.jpg'
                    ]
                  ],
                  config: {
                    title: 'Home Page'
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
        value: '预载工作并不是立刻执行的，而是在浏览器空闲时按顺序依次载入。'
      },
      {
        type: 'tips',
        value: '非存在于 AppletResources 类型中的未知类型可尝试使用 script 类型进行预载。'
      }
    ]
  ]
}