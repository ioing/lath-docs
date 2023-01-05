import html from './html.html'

export default {
  config: {
    level: 4,
    title: '',
    free: true,
    render: (target) => {
      target.innerHTML = html
    },
    modality: 'sheet' as 'sheet',
    modalityUnderUntouchable: 'paper' as 'paper',
    sheetOptions: {
      top: '12%',
      backgroundBrightness: 0.8,
      maskClosable: true,
      backdropColor: 'rgb(82 82 82)'
    },
    color: '#fff',
    background: 'auto' as 'auto'
  }
}
