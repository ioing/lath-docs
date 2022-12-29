export default {
  title: 'Animate Effect',
  content: [
    [
      {
        type: 'title',
        value: 'Animate Effect'
      },
      {
        type: 'sub',
        value: 'AppletConfig > animation'
      },
      {
        type: 'text',
        value: 'Applet windows transition preset animation effect.'
      },
      {
        type: 'text',
        value: `
          Demo:
          <ul>
            <li>
              <svg t="1661238867400" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25438" width="200" height="200"><path d="M512 17.066667C238.933333 17.066667 17.066667 238.933333 17.066667 512S238.933333 1006.933333 512 1006.933333 1006.933333 785.066667 1006.933333 512 785.066667 17.066667 512 17.066667z m358.4 477.866666c0 54.613333-47.786667 102.4-102.4 102.4h-276.48l44.373333 44.373334c37.546667 37.546667 37.546667 95.573333 0 129.706666-17.066667 17.066667-40.96 27.306667-64.853333 27.306667s-47.786667-10.24-64.853333-27.306667L170.666667 535.893333c-23.893333-23.893333-23.893333-61.44 0-85.333333l235.52-235.52c34.133333-34.133333 95.573333-34.133333 129.706666 0 37.546667 37.546667 37.546667 95.573333 0 129.706667l-44.373333 47.786666h276.48c54.613333 0 102.4 44.373333 102.4 102.4z" fill="#707070" p-id="25439"></path></svg>
              <a href="#empty" preset-effect="slide-left" clone-as="empty-left">slide-left</a>
            </li>
            <li>
              <svg t="1661238590211" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="15411" width="200" height="200"><path d="M512 1006.933333c273.066667 0 494.933333-221.866667 494.933333-494.933333S785.066667 17.066667 512 17.066667 17.066667 238.933333 17.066667 512 238.933333 1006.933333 512 1006.933333z m-358.4-477.866666c0-54.613333 47.786667-102.4 102.4-102.4h276.48l-44.373333-44.373334c-37.546667-37.546667-37.546667-95.573333 0-129.706666 17.066667-17.066667 40.96-27.306667 64.853333-27.306667s47.786667 10.24 64.853333 27.306667l235.52 235.52c23.893333 23.893333 23.893333 61.44 0 85.333333l-235.52 235.52c-34.133333 34.133333-95.573333 34.133333-129.706666 0-37.546667-37.546667-37.546667-95.573333 0-129.706667l44.373333-47.786666H256c-54.613333 0-102.4-44.373333-102.4-102.4z" fill="#707070" p-id="15412"></path></svg>
              <a href="#empty" preset-effect="slide-right" clone-as="empty-right">slide-right</a>
            </li>
            <li>
              <svg t="1661238767871" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="20430" width="200" height="200"><path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0z m279.893333 556.373333c-34.133333 34.133333-95.573333 34.133333-129.706666 0L614.4 508.586667V785.066667c0 58.026667-44.373333 102.4-102.4 102.4s-102.4-44.373333-102.4-102.4v-273.066667l-44.373333 44.373333c-34.133333 34.133333-95.573333 34.133333-129.706667 0-37.546667-37.546667-37.546667-95.573333 0-129.706666l235.52-235.52c23.893333-23.893333 61.44-23.893333 85.333333 0l235.52 235.52c17.066667 17.066667 27.306667 40.96 27.306667 64.853333s-10.24 47.786667-27.306667 64.853333z" fill="#707070" p-id="20431"></path></svg>
              <a href="#empty" preset-effect="slide-up" clone-as="empty-up">slide-up</a>
            </li>
            <li>
              <svg t="1661238893748" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="25711" width="200" height="200"><path d="M512 0C228.693333 0 0 228.693333 0 512s228.693333 512 512 512 512-228.693333 512-512S795.306667 0 512 0z m276.48 597.333333l-235.52 235.52c-10.24 13.653333-27.306667 20.48-40.96 20.48s-30.72-6.826667-40.96-17.066666l-235.52-235.52c-20.48-20.48-30.72-44.373333-30.72-68.266667s10.24-47.786667 27.306667-64.853333c34.133333-34.133333 95.573333-34.133333 129.706666 0L409.6 512V238.933333c0-58.026667 44.373333-102.4 102.4-102.4s102.4 44.373333 102.4 102.4v273.066667l44.373333-44.373333c34.133333-34.133333 95.573333-34.133333 129.706667 0 37.546667 37.546667 37.546667 95.573333 0 129.706666z" fill="#707070" p-id="25712"></path></svg>
              <a href="#empty" preset-effect="slide-down" clone-as="empty-down">slide-down</a>
            </li>
            <li>
              <svg t="1661238015684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6735" width="200" height="200"><path d="M789.333333 64a170.666667 170.666667 0 0 1 170.666667 170.666667v311.466666a8.533333 8.533333 0 0 1-8.533333 8.533334h-46.933334a8.533333 8.533333 0 0 1-8.533333-8.533334V234.666667a106.666667 106.666667 0 0 0-102.037333-106.56L789.333333 128H234.666667a106.666667 106.666667 0 0 0-106.56 102.037333L128 234.666667v554.666666a106.666667 106.666667 0 0 0 102.037333 106.56L234.666667 896h311.466666c4.693333 0 8.533333 3.84 8.533334 8.533333v46.933334a8.533333 8.533333 0 0 1-8.533334 8.533333H234.666667a170.666667 170.666667 0 0 1-170.666667-170.666667V234.666667a170.666667 170.666667 0 0 1 170.666667-170.666667h554.666666z m85.333334 554.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v170.666667a85.333333 85.333333 0 0 1-85.333333 85.333333h-170.666667a85.333333 85.333333 0 0 1-85.333333-85.333333v-170.666667a85.333333 85.333333 0 0 1 85.333333-85.333333h170.666667z m0 64h-170.666667a21.333333 21.333333 0 0 0-21.184 18.837333L682.666667 704v170.666667a21.333333 21.333333 0 0 0 18.837333 21.184L704 896h170.666667a21.333333 21.333333 0 0 0 21.184-18.837333L896 874.666667v-170.666667a21.333333 21.333333 0 0 0-18.837333-21.184L874.666667 682.666667zM460.8 192c4.693333 0 8.533333 3.84 8.533333 8.533333v46.933334a8.533333 8.533333 0 0 1-8.533333 8.533333h-159.530667l229.162667 229.184-45.248 45.248L256 301.269333V460.8a8.533333 8.533333 0 0 1-8.533333 8.533333H200.533333a8.533333 8.533333 0 0 1-8.533333-8.533333V256a64 64 0 0 1 60.245333-63.893333L256 192h204.8z" fill="#707070" p-id="6736"></path></svg>
              <a href="#empty" preset-effect="zoom" clone-as="empty-zoom">zoom</a>
            </li>
            <li>
              <svg t="1661237566437" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3402" width="200" height="200"><path d="M640 896h85.333333v-85.333333h-85.333333v85.333333z m170.666667-512h85.333333v-85.333333h-85.333333v85.333333zM128 213.333333v597.333334c0 47.146667 38.186667 85.333333 85.333333 85.333333h170.666667v-85.333333h-170.666667V213.333333h170.666667V128h-170.666667c-47.146667 0-85.333333 38.186667-85.333333 85.333333z m682.666667-85.333333v85.333333h85.333333c0-47.146667-38.186667-85.333333-85.333333-85.333333zM469.333333 981.333333h85.333334V42.666667h-85.333334v938.666666z m341.333334-256h85.333333v-85.333333h-85.333333v85.333333z m-170.666667-512h85.333333V128h-85.333333v85.333333z m170.666667 341.333334h85.333333v-85.333334h-85.333333v85.333334z m0 341.333333c47.146667 0 85.333333-38.186667 85.333333-85.333333h-85.333333v85.333333z" p-id="3403" fill="#707070"></path></svg>
              <a href="#empty" preset-effect="flip" clone-as="empty-flip">flip</a>
            </li>
            <li>
              <svg t="1661239202576" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40451" width="200" height="200"><path d="M731.0336 859.8528V164.1472c0-40.1408-48.5376-60.3136-77.0048-31.8464L306.176 480.1536c-17.6128 17.6128-17.6128 46.1824 0 63.7952l347.8528 347.8528c28.4672 28.3648 77.0048 8.2944 77.0048-31.9488z" p-id="40452" fill="#707070"></path></svg>
              <a href="#empty" preset-effect="flip-left" clone-as="empty-flip-left">flip-left</a>
            </li>
            <li>
              <svg t="1661239231548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="40762" width="200" height="200"><path d="M292.9664 164.1472v695.808c0 40.1408 48.5376 60.3136 77.0048 31.8464L717.824 543.8464c17.6128-17.6128 17.6128-46.1824 0-63.7952L369.9712 132.1984c-28.4672-28.3648-77.0048-8.2944-77.0048 31.9488z" p-id="40763" fill="#707070"></path></svg>
              <a href="#empty" preset-effect="flip-right" clone-as="empty-flip-right">flip-right</a>
            </li>
            <li>
              <svg t="1661239272632" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="41033" width="200" height="200"><path d="M164.1472 731.0336h695.808c40.1408 0 60.3136-48.5376 31.8464-77.0048L543.8464 306.176c-17.6128-17.6128-46.1824-17.6128-63.7952 0L132.1984 654.0288c-28.3648 28.4672-8.2944 77.0048 31.9488 77.0048z" p-id="41034" fill="#707070"></path></svg>
              <a href="#empty" preset-effect="flip-up" clone-as="empty-flip-up">flip-up</a>
            </li>
            <li>
              <svg t="1661239101001" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="29928" width="200" height="200"><path d="M65.582671 288.791335l446.417329 446.41733 446.417329-446.41733z" p-id="29929" fill="#707070"></path></svg>
              <a href="#empty" preset-effect="flip-down" clone-as="empty-flip-down">flip-down</a>
            </li>
            <li>
              <svg t="1661239016758" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="28039" width="200" height="200"><path d="M810.666667 128H213.333333a85.333333 85.333333 0 0 0-85.333333 85.333333v597.333334a85.333333 85.333333 0 0 0 85.333333 85.333333h597.333334a85.333333 85.333333 0 0 0 85.333333-85.333333V213.333333a85.333333 85.333333 0 0 0-85.333333-85.333333zM213.333333 810.666667v-122.026667L335.36 810.666667z m227.413334 0L213.333333 583.253333v-105.813333L546.56 810.666667z m211.2 0L213.333333 371.626667V266.24L757.76 810.666667zM810.666667 757.76L266.24 213.333333h105.386667L810.666667 652.373333z m0-213.333333L477.44 213.333333h105.386667L810.666667 441.173333z m0-211.2L688.64 213.333333H810.666667z" p-id="28040" fill="#707070"></path></svg>
              <a href="#empty" preset-effect="fade" clone-as="empty-fade">fade</a>
            </li>
          </ul>
        `
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
            type AnimationPrestType = 'inherit'
            | 'fade' | 'zoom' | 'pop-sheet'
            | 'flip' | 'flip-left' | 'flip-down' | 'flip-right' | 'flip-up'
            | 'slide' | 'slide-left' | 'slide-right' | 'slide-up' | 'slide-down'
            interface AppletBaseConfig {
              animation?: AnimationPrestType
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
        value: 'Lath provides a choice of common animation effects, just specify your preset effect name to achieve cool windows animation.'
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
                    animation: 'slide'
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
        value: 'If the Applet animation effect is not set, the animation effect in the frameworks Applet will be inherited by default.'
      },
      {
        type: 'text',
        value: 'When a hyperlink that is not defined as an Applet opens a new window, the default window effect is \'slide\'.'
      },
      {
        type: 'tips',
        value: 'Each pre-made animation includes a forward animation and a backward animation which effect will be determined by the direction of your browsing history and the [level] level between the Applets.'
      }
    ]
  ]
}