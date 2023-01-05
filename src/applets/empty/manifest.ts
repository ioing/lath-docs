import html from './html.html'

export default {
  config: {
    level: 3,
    title: '',
    free: true,
    source: {
      html
    },
    animation: 'slide-up' as 'slide-up',
    animationUnderUntouchable: false,
    color: '#333',
    background: 'auto' as 'auto',
    capture: (e) => {
      return (e.href ?? String(e)).indexOf('empty') !== -1
    }
  }
}
