const http = require('http')


const route = {}

function use(obj){
    Object.assign(route,obj)
}


function start() {
    http.createServer().on('request',(req,res) => {
        const { pathname } = new URL(req.url, 'http://127.0.0.1:3000')
        route[pathname] ? route[pathname](req,res) : route['/404'](req,res) 
    }).listen('3000',() => {
        console.log('server start')
    })
}

module.exports = {
    start,
    use
}

