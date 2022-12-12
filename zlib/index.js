const http = require('http')
const fs = require('fs')
const zlib = require('zlib')


const server = http.createServer();
const gzip = zlib.createGzip()

server.on('request', (req,res) => {
    res.writeHead(200, {'content-Type': 'application/x-javascript;charset=utf-8', 'content-Encoding': 'gzip'})
    const readStraem = fs.createReadStream('./a.txt','utf-8')

    readStraem.pipe(gzip).pipe(res)

})

server.listen('3000', () => {
    console.log('服务器已启动')
})
