const fs = require('fs')

fs.unlink('./picture/a.txt', error => {
    console.log(error)
})