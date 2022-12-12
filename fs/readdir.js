 const fs = require('fs')

 fs.readdir('./picture', (error, data) => {
    if(!error){
        console.log('data', data)
    }
 })
