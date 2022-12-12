const fs = require('fs').promises

fs.readFile('./picture/a.js', 'utf-8').then(data => {
    console.log('data',data)
})