export default {
  title: 'Application.pushWindow',
  content: [
    [
      {
        type: 'Application.pushWindow',
        value: 'Level'
      },
      {
        type: 'sub',
        value: 'Application.pushWindow'
      },
      {
        type: 'text',
        value: 'Transform to the page that specifies the Applet or URL.'
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
            declare interface TransformActionOrigin {
              x: number,
              y: number
            }
            type PushWindowOptions = [
              url: string,
              title: string,
              preset: string,
              cloneAs?: string,
              touches?: TouchEvent | TransformActionOrigin
            ]
            type pushWindow = (url: string, title = '', preset = 'slide', cloneAs?: string, touches?: TouchEvent | TransformActionOrigin) => Promise<void>
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
        value: 'Same as <a href="?id=applicationTo#docs" preset-effect="slide" clone-as="doc-newWindow-applicationTo" >Application.to</a>, the first parameter of \'pushWindow\' can be passed in not only an Applet ID, but also a page URL to open a newly generated Applet page.'
      },
      {
        type: 'text',
        value: '<b>cloneAs</b>'
      },
      {
        type: 'text',
        value: 'Define the name of a new clone of the Applet that does not replace the original Applet instance, but exists independently as a new Applet.'
      },
      {
        type: 'text',
        value: '<b>preset</b>'
      },
      {
        type: 'text',
        value: 'Define the built-in animation effect that is used when the Applet is opened, and its value is the built-in animation name.'
      },
      {
        type: 'text',
        value: '<b>title</b>'
      },
      {
        type: 'text',
        value: 'Define the title of the opened Applet.'
      },
      {
        type: 'text',
        value: '<b>touches</b>'
      },
      {
        type: 'text',
        value: 'Same as the part of the \'touches\' in the \'Application.to\'.'
      },
      {
        type: 'text',
        value: '<b>url</b>'
      },
      {
        type: 'text',
        value: 'Open the url of the new page (the target page will be affected by the [capture] logic).'
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
            application.pushWindow('http://www.xxxxx.com/index.html', '首页', 'zoom', 'newHome')
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: 'If you want to invoke this capability in an \'iframe\' page, you can use \'postMessage\' to send a request.'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="ts">
            parent.postMessage({
              action: 'pushWindow',
              data: ['https://xxx.com/', 'title']
            })
          </code-highlight>
        `
      }
    ]
  ]
}