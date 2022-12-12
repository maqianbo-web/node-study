const http = require('http');
const { url } = require('inspector');


const server = http.createServer();


server.on('request',(req, res) => {
    const { url } = req;
    if(url === '/favicon.ico') { return }
    res.writeHead('200', {
        'content-type': 'text/html, charset: utf-8',
        'Access-Control-Allow-Origin': '*'   // 允许所有的接口跨域
    })
    const {pathname,searchParams} =  new URL(url, `http://127.0.0.1:3000 `)
    if(pathname === '/list'){
        res.end(JSON.stringify({name: 'maqianbo',age: '26'}))
    }else{
        res.end('not found')
    }
})

server.listen('3000',() => {
    console.log('http-json server start')
})