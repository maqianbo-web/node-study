const http = require('http');
const https = require('https');
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
        fetchData(res);

    }else{
        res.end('not found')
    }
})

server.listen('3000',() => {
    console.log('http-json server start')
})

function fetchData(response){
    const url = 'https://search.jd.com/category.php?keyword=%E9%97%A8%E7%9A%84%E7%8C%AB%E7%9C%BC&qrst=1&stock=1&pvid=48f2ec2726304fffaa286b1d55d268b3&cid2=23023'
    https.get(url,(res) => {
        let data = ''
        res.on('data', (chunk) => {
            data += chunk 
        })
        res.on('end',() => {
            response.end(data)
        })

    })
}