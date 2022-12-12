const fs = require('fs')

fs.mkdir('./picture', error => {
    console.log(error)
    if(error && error.code === 'EEXIST') {
        console.log('文件目录已存在')
    }
})