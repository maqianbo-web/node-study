
const  fs = require('fs')


const ws =fs.createWriteStream('./picture/b.txt', 'utf-8')

ws.write(' hello Miss wu')
ws.write(`\n I am your boyFriend`)
ws.write(`\n What I want to say is`)
ws.write(`\n Master Kang Beef Noodles is a big fool`)
ws.write(`\n We don't care with him`)

ws.end()

// const ws = fs.createReadStream('./picture/b.txt', 'utf-8')

// let chunkContent = ''
// ws.on('data', chunk => {
//     chunkContent += chunk
// })

// ws.on('end',() => {
//     console.log('chunkContent',chunkContent)
// })

// ws.on('error', error => {
//     console.log(error)
// })