const http = require('http');
const https = require('https');
const cheerio = require('cheerio')


const server = http.createServer();


server.on('request',(req, res) => {
    const { url } = req;
    if(url === '/favicon.ico') { return }
    res.writeHead('200', {
        'content-type': 'text/html, charset: utf-8',
        'Access-Control-Allow-Origin': '*'   // 允许所有的接口跨域
    })
    const {pathname} =  new URL(url, `http://127.0.0.1:3000 `)
    if(pathname === '/list'){
        fetchData((data) => {
            splider(data)
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
    const url = 'www.huanlj.com'
    https.get(url,(res) => {
        let data = ''
        res.on('data', (chunk) => {
            data += chunk 
        })
        res.on('end',() => {
            cb(data)
        })

    })
}

function splider (data) {
    const $ = cheerio.load(data);
    console.log('$',$)
    return JSON.stringify(data)
}