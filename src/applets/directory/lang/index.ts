import en from './en'
import cn from './zh-CN'
import jp from './jp'

export default () => {
  const lang = localStorage.getItem('__lang__')
  if (lang === 'zh-CN') {
    return cn
  } else if (lang === 'JP') {
    return jp
  } else {
    return en
  }
}