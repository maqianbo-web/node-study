const fs = require('fs');

fs.writeFile('./picture/a.txt', 'hello maqianbo', error => {
    console.log(error)
})