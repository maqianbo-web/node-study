const fs = require('fs')

fs.stat('./picture', (error, data) => {
    if(!error){
        console.log(data);
    }
})