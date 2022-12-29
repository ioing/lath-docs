import css from './css.html'
import foot from './foot.html'

type DocsItemSchema = {
  type: string
  value?: string
}
type DocsSchema = {
  title: string,
  figure?: string,
  content: DocsItemSchema[][]
}
type LangSchema = { [key: string]: DocsSchema | string }

const generateCard = (schema: DocsItemSchema[]) => {
  const htmlStringArray: string[] = []
  for (const item of schema) {
    htmlStringArray.push(generateItem(item))
  }
  return `
    <div class="card">
      ${htmlStringArray.join('\n')}
    </div>
  `
}

const generateItem = (schema: DocsItemSchema) => {
  const htmlStringArray: string[] = []
  const type = schema.type
  switch (type) {
    case 'title':
      return `
        <div class="card-title">${schema.value}</div>
      `
    case 'text':
      return `
        <p>${schema.value}</p>
      `
    case 'brief':
      return `
        <p style="font-size: 21px;font-weight: bold;">${schema.value}</p>
      `
    case 'image':
      return `
        <img src="${schema.value}" />
      `
    case 'sub':
      return `
        <small>${schema.value}</small>
      `
    case 'tips':
      return `
        <div class="tips">${schema.value}</div>
      `
    case 'hr':
      return `
        <hr />
      `
    case 'code':
      return `
        <div class="docs-code">
          ${schema.value}
        </div>
      `
  }
  return htmlStringArray.join('\n')
}
const generateHtml = (schema: DocsSchema | string) => {
  if (typeof schema === 'string') {
    return `
      ${css}
      <div class="placeholder"></div>
      <div class="docs">
        <div id="header">
          <div class="header-inner">
            <div class="back-btn" onclick="javascript: history.back()">
              <div class="back-icon"></div>
              <span class="back-text">List</span>
            </div>
            <div id="docs-title" class="docs-title"></div>
          </div>
        </div>
        <section id="page-content">
          ${schema}
        </section>
        ${foot}
      </div>
    `
  }
  const htmlStringArray: string[] = [
  ]
  if (typeof schema === 'string') {
    htmlStringArray.push(schema)
  } else {
    for (const item of schema.content) {
      htmlStringArray.push(generateCard(item))
    }
  }
  return `
    ${css}
    <div class="placeholder"></div>
    <div class="docs">
      <div id="header">
        <div class="header-inner">
          <div class="back-btn" onclick="javascript: history.back()">
            <div class="back-icon"></div>
            <span class="back-text">List</span>
          </div>
          <div id="docs-title" class="docs-title">${schema.title}</div>
        </div>
      </div>
      ${schema.figure ?? ''}
      <section id="page-content">
        ${htmlStringArray.join('\n')}
      </section>
      ${foot}
    </div>
  `
}

const getHtml = async () => {
  const id = location.search.split('=')[1]
  const lang = localStorage.getItem('__lang__')
  let schema: LangSchema
  if (lang === 'zh-CN') {
    schema = await import('./lang/zh-cn') as unknown as LangSchema
  } else if (lang === 'JP') {
    schema = await import('./lang/jp') as unknown as LangSchema
  } else {
    schema = await import('./lang/en') as unknown as LangSchema
  }
  if (schema[id]) {
    return generateHtml(schema[id])
  } else {
    schema = await import('./lang/zh-cn') as unknown as LangSchema
    return generateHtml(schema[id])
  }
}

export {
  getHtml
}