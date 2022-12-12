const fs = require('fs')

fs.appendFile('./picture/a.txt', '\n我是新追加的内容', error => {
    console.log(error)
})