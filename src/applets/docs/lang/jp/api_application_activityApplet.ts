export default {
  title: 'Application.activeApplet',
  content: [
    [
      {
        type: 'title',
        value: 'Application.activeApplet'
      },
      {
        type: 'sub',
        value: 'Application.activeApplet'
      },
      {
        type: 'text',
        value: '当前活动的 Applet。'
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
            type activeApplet = Applet
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
        value: '若当前可视区的程序卡为 home，那么访问该值则会返回 home 程序卡的 Applet 对象。'
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
            console.log(application.activeApplet)
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
        value: '若当前可视区的程序卡为 SlideView 模式中的程序卡，此时返回的值为为 SlideView 视窗的程序卡，而非 SlideView 视图中的子程序卡。'
      },
      {
        type: 'tips',
        value: '若想获得活动程序卡中的子程序卡可查阅 SlideView 的相关介绍。'
      }
    ]
  ]
}