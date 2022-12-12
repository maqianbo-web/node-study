const fs = require('fs')

// fs.readFile('./picture/a.txt',(error, data) => {
//     if(!error) {
//         console.log('data', data.toString('utf-8'))
//     }
// })

fs.readFile('./picture/a.txt', 'utf-8', (error, data) => {
    if(!error) {
        console.log('data', data)
    }
})