const http = require('http');
const https = require('https');


const server = http.createServer();


server.on('request',(req, res) => {
    const { url } = req;
    if(url === '/favicon.ico') { return }
    res.writeHead('200', {
        'content-Type': 'text/html, charset: utf-8',
        'Access-Control-Allow-Origin': '*'   // 允许所有的接口跨域
    })
    const {pathname,searchParams} =  new URL(url, `http://127.0.0.1:3000 `)
    if(pathname === '/list'){
        fetchData((data) => {
            res.end(data)
        });

    }else{
        res.end('not found')
    }
})

server.listen('3000',() => {
    console.log('http-json server start')
})

function fetchData(cb){
    const urlObj = new URL('', 'https://m.mi.com/v1/home/page')
    const options = {
        hostname: 'm.mi.com',
        port: '443',
        path: '/v1/home/page',
        method: 'post',
        headers: {
            // 'content-type': 'application/json'
            'content-Type': 'application/x-www-form-urlencoded'
        }
    }
    const request = https.request(options,(res) => {
        let data = ''
        res.on('data', (chunk) => {
            data += chunk 
        })
        res.on('end',() => {
            console.log('data',data)
            cb(data)
        })
    })
    request.write(`client_id=180100031051&channel_id=17409.0380&webp=1&page_type=recommend&recommend_tag=XMGUEST-AC6E5210-6727-11ED-BD61-C5A83D904381`)
    request.end()
}