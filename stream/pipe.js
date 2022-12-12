const fs = require('fs')

const readStream = fs.createReadStream('./picture/b.txt','utf-8')

const writeStream = fs.createWriteStream('./picture/a.txt', 'utf-8')

readStream.pipe(writeStream)