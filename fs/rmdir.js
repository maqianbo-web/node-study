const fs = require('fs')

fs.rmdir('./picture1', error => {
    console.log(error)
})