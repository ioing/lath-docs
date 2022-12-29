export default {
  title: 'Tutorial',
  figure: `
    <div class="figure">
      <h2>多程序卡片间横滑，不卡顿不掉帧</h2>
      <p>支持手势与事件驱动</p>
    </div>
    <style>
      body {
        transition: all .2s ease;
      }
      .figure {
        margin: -20px -12px 20px;
        min-height: 225px;
        scroll-snap-align: start;
        display: flex;
        align-items: left;
        justify-content: left;
        text-align: left;
        position: relative;
        padding: 0 30px;
        border-radius: 8px;
        box-sizing: border-box;
        flex-direction: column;
        cursor: pointer;
        filter: brightness(0.9);
        background-image: linear-gradient(353deg,#580303,#d10000);
        transition: all .2s ease;
      }
      .figure h2 {
        margin: 30px 0 60px;
        font-size: 32px;
        max-height: 270px;
        text-overflow: ellipsis;
        box-orient: vertical;
        -webkit-box-orient: vertical;
        line-clamp: 6;
        -webkit-line-clamp: 6;
        overflow: hidden;
        color: #fff;
        transition: all .2s ease;
      }
      .figure p {
        position: absolute;
        bottom: 15px;
        max-width: 250px;
        margin: 0;
        font-size: 14px;
        text-align: left;
        color: rgba(255, 255, 255, .5);
        transition: all .2s ease;
      }
    </style>
  `,
  content: [
    [
      {
        type: 'title',
        value: '制作滑动卡片效果'
      },
      {
        type: 'brief',
        value: '滑动切卡效果就是将多个 Applet 并排一列，通过左右的滑动手势实现 Applet 之间的切换。'
      },
      {
        type: 'text',
        value: `
          <div style="display: flex; width: 100%; box-sizing: border-box; height: 300px; padding: 10px; border-radius: 18px; background: linear-gradient(300deg, rgb(0, 164, 255, 0.27), #ff8351);transform: translate3d(10px, 10px, 10px) perspective(1000px) rotateX(10deg) rotateY(50deg);">
            <div style="min-width: 90%; height: 260px; border-radius: 18px; margin: 10px 0 0 -50%; border: 1px solid rgba(0,0,0,.1); background: rgb(0, 164, 255, 0.27); color: #fff2ee70; backdrop-filter: saturate(180%) blur(5px); line-height: 260px; font-size: 80px; text-indent: 20px;">PageA</div>
            <div style="min-width: 90%; height: 260px; border-radius: 18px; margin: 10px 0 0 10px; border: 1px solid rgba(0,0,0,.1); background: rgb(0, 164, 255, 0.27); color: #3a1500; backdrop-filter: saturate(180%) blur(5px); line-height: 260px; font-size: 70px; text-indent: 20px;">PageB</div>
          </div>
        `
      },
      {
        type: 'text',
        value: '这会很容易让我们联想到 <b>Tab</b> 功能，但他们存在一些微的小区别，比如 Tab 一般是不具有滑动手势的。'
      },
      {
        type: 'text',
        value: '我们在实现这个效果前需要确定滑动卡片的效果是由哪个视图承接的，即实现该效果的 Applet 是谁，同时在这个视图中所嵌套的并排可滑动的 Applet 是谁？确定好这些之后我们就可以开始创建效果了，用到配置项 <a to-applet="doc?id=defaultSlideViewApplets">defaultSlideViewApplets</a>'
      },
      {
        type: 'text',
        value: '假使我们有三个 Applet 分别命名为 A、 B 、C，我们希望有一个视图可以同时承载 ABC 三个 Applet，并使它们能够呈现 Slider 效果。'
      },
      {
        type: 'text',
        value: '我们新建一个 Applet D，它并不具备任何自身的视图，而仅是作为空容器将 ABC三个 Applet 引入进来，那么此时我们导航进入到 D时就可看到一个 Slider 效果的视图了，如果我们希望访问到 B，则只需先访问 D 再访问 B，若已经存在 D 则可直接访问 B 即可。'
      },
      {
        type: 'code',
        value: `
        <code-highlight type="ts">
          createApplication({
            applets: {
              frameworks: {
                config: {
                  index: 'D'
                }
              },
              A: {
                config: {
                  source: {
                    src: './a.html'
                  }
                }
              },
              B: {
                config: {
                  source: {
                    src: './b.html'
                  }
                }
              },
              C: {
                config: {
                  source: {
                    src: './c.html'
                  }
                }
              },
              D: {
                config: {
                  defaultSlideViewApplets: [
                    {
                      id: "A",
                      activate: 'instant'
                    },
                    {
                      id: "B",
                      activate: 'lazy'
                    },
                    {
                      id: "C",
                      activate: 'lazy'
                    }
                  ]
                }
              }
            }
          })
        </code-highlight>
        `
      },
    ]
  ]
}