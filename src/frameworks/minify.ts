import html from './html.html'

export default {
  config: {
    index: 'home',
    title: '',
    level: 0,
    free: false,
    prerender: ['home', 'empty', 'facebook', 'doc'],
    animation: 'slide',
    background: true,
    safeArea: ['48px', '0px', '0px', '0px'],
    render: (target: HTMLElement) => {
      target.innerHTML = html
    },
    globalCSSVariables: {
      '--background': '#000',
      '--mainColor': '#fff'
    }
    // globalCSSVariables: {
    //   '--background': '#888',
    //   '--logoBg': '#fff',
    //   '--logoText': '#000',
    //   '--mainColor': '#000',
    //   '--cardbg': '#fff',
    //   '--cardTextColor': 'rgba(0, 0, 0, .92)'
    // }
  }
}
