
const fs = require('fs')
const path = require('path')

const copyFile = function (srcPath, tarPath, cb) {
  const rs = fs.createReadStream(srcPath)
  rs.on('error', function (err) {
    if (err) {
      console.log('read error', srcPath)
    }
    cb && cb(err)
  })

  const ws = fs.createWriteStream(tarPath)
  ws.on('error', function (err) {
    if (err) {
      console.log('write error', tarPath)
    }
    cb && cb(err)
  })
  ws.on('close', function (ex) {
    cb && cb(ex)
  })

  rs.pipe(ws)
}

const copyFolder = function (srcDir, tarDir, cb) {
  fs.readdir(srcDir, function (err, files) {
    let count = 0
    const checkEnd = function () {
      ++count == files.length && cb && cb()
    }

    if (err) {
      checkEnd()
      return
    }

    files.forEach(function (file) {
      const srcPath = path.join(srcDir, file)
      const tarPath = path.join(tarDir, file)

      fs.stat(srcPath, function (err, stats) {
        if (stats.isDirectory()) {
          console.log('mkdir', tarPath)
          fs.mkdir(tarPath, function (err) {
            if (err) {
              console.log(err)
              return
            }

            copyFolder(srcPath, tarPath, checkEnd)
          })
        } else {
          copyFile(srcPath, tarPath, checkEnd)
        }
      })
    })

    //为空时直接回调
    files.length === 0 && cb && cb()
  })
}

fs.readdir('./docs', (err, files) => {
  const fileList = []
  for (let file of files) {
    if (file.indexOf('js.js.map') === -1) {
      fileList.push(`"${file}"`)
    }
  }
  fileText = `
    var cacheFiles = [
      ${fileList.join(',')}
    ]
  `
  fs.writeFileSync('./pwa/cache.js', fileText, {}, () => {
    if (err) {
      throw err
    }
  })
})

copyFolder('./pwa', 'docs', function (err) {
  if (err) {
    console.log(err)
    return
  }
})

fs.mkdir('docs/Exp', () => {
  fs.mkdir('docs/Exp/def', () => {
    copyFolder('./Exp/def/docs', 'docs/Exp/def/', function (err) {
      if (err) {
        console.log(err)
        return
      }
    })
  })
})
