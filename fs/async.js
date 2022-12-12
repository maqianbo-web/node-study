const fs = require('fs')

fs.writeFileSync('./picture/a.js', `const a = 'hello word'`, error => {
    console.log(error)
})