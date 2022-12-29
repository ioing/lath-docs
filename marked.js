const marked = require('marked');
const fs = require('fs');
const path = require('path');

const mdDir = './markdown';  // md文件夹的路径
const htmlDir = './src/html';  // html文件夹的路径

// 读取md文件夹中的所有文件名
const filenames = fs.readdirSync(mdDir);

// 遍历文件名，如果是md文件则将其转换为html文件
filenames.forEach(filename => {
  if (path.extname(filename) === '.md') {
    // 读取文件内容
    const fileContent = fs.readFileSync(path.join(mdDir, filename), 'utf8');
    // 使用marked将markdown文件转换为html文件
    let html = marked.parse(fileContent);
    html = html.replace(/<code class="language-(.*)"/g, '<div class="docs-code"><code-highlight type="$1"')
    html = html.replace(/<\/code>/g, '</code-highlight></div>')
    html = html.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/g, (match, p1) => {
      return `
</div>
<div class="card">
  <h1>${p1}</h1>
`;
    });
    html = `
    ${html.trim().substring(6)}
</div>
    `;
    // 写入html文件
    fs.writeFileSync(path.join(htmlDir, filename.replace('.md', '.html')), html);
  }
});

const buildDocsLangExport = (langName) => {
  // 定义新文件的路径和名称
  const newFilePath = path.join(__dirname, 'src/applets/docs/lang/' + langName + '.ts');

  // 定义要导出的文件夹的路径
  const directoryPath = path.join(__dirname, 'src/html');

  // 读取文件夹中的文件列表
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    // 创建一个新的 TypeScript 文件
    fs.writeFile(newFilePath, '', (err) => {
      if (err) {
        console.error(err);
        return;
      }

      console.log(`新文件 ${newFilePath} 已创建`);
    });

    // 遍历文件夹中的所有文件
    files.forEach((file) => {
      // 忽略非 TypeScript 文件
      if (path.extname(file) !== '.html' || path.basename(file).indexOf(`.${langName}.`) === -1) {
        return;
      }

      // 将文件路径中的 `src` 替换为 `.'
      // 这样就可以在新文件中使用相对路径导入这些文件
      const importPath = path.relative(__dirname, path.join(directoryPath, file)).replace('src', '/src');
      // 在新文件中写入导入语句
      fs.appendFile(newFilePath, `export * as ${path.basename(file).split('.')[0]} from '${importPath}';\n`, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
}

buildDocsLangExport('zh-cn')
buildDocsLangExport('en')