const fs = require('fs')

fs.rename('./picture', './picture1', error => {
    console.log(error)
})