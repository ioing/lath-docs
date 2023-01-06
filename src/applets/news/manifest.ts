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
      top: '5%',
      backgroundBrightness: 0.8,
      maskClosable: true,
      miniCardHeight: '260px',
      defaultCardSize: 'large' as 'large',
      backdropColor: 'rgb(82 82 82)',
      swipeClose: true
    },
    color: '#555',
    background: 'auto' as 'auto'
  }
}
