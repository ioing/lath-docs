export default {
  title: 'Install & Preface',
  content: [
    [
      {
        type: 'title',
        value: 'Install'
      },
      {
        type: 'text',
        value: 'Using <b>npm / yarn</b> to install'
      },
      {
        type: 'code',
        value: `
          <code-highlight type="bash">
            $ npm install lath --save
            // or
            $ yarn add lath
          </code-highlight>
        `
      },
      {
        type: 'text',
        value: 'Lath is an experience enhancement container with very small initial dependencies, only about <b>5kb</b>. Its core capabilities are atomic, and dependencies are only dynamically loaded when needed.'
      }
    ],
    [
      {
        type: 'title',
        value: 'Why use it?'
      },
      {
        type: 'text',
        value: 'It can take your page experience to the next level and achieve the effect comparable to native Apps, such as <a to-applet="doc?id=pullToRefresh" clone-as="popDoc">Preload secondary pages</a>, <a to-applet="doc?id=modality" clone-as="popDoc">Pop Sheet</a> interactive effect, <a to-applet="doc?id=pullToRefresh" clone-as="popDoc">smooth flicker-free pull-down refresh</a>, to achieve seamless<a to-applet="doc?id=presetEffect" clone-as="popDoc">Page segue effects</a>and smooth<a to-applet="doc?id=presetEffect" clone-as="popDoc">Page horizontal sliding effect</a>and many other implementation schemes.'
      },
      {
        type: 'text',
        value: 'When you want to get all of this, you do not need to make changes to the original logic and framework, or even block the page performance when the initial page loads.'
      },
      {
        type: 'text',
        value: 'Lath has a very good design in window management. It can not only automatically help you to recycle resources, but also automatically control the event process between pages. The applications created with it are truly Web Apps that are comparable to Native Apps.'
      },
      {
        type: 'text',
        value: 'Get Started Next!'
      }
    ]
  ]
}