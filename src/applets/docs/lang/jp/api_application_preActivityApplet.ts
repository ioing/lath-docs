export default {
  title: 'Application.preActivityApplet',
  content: [
    [
      {
        type: 'title',
        value: 'Application.preActivityApplet'
      },
      {
        type: 'sub',
        value: 'Application.preActivityApplet'
      },
      {
        type: 'text',
        value: '前一个活动的 Applet。'
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
            type preActivityApplet = Applet
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
        value: '若前一个可视区的程序卡为 home，那么访问该值则会返回 home 程序卡的 Applet 对象。'
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
            console.log(application.preActivityApplet)
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
        value: '程序卡的获取逻辑与<a href="?id=applicationActivityApplet#docs" preset-effect="slide" clone-as="doc-newWindow-applicationActivityApplet">Application.activeApplet</a>保持一致。'
      }
    ]
  ]
}