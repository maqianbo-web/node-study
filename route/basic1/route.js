
const fs = require('fs')
const path = require('path')
const mime = require('mime')


function render(res,path, type='text/html'){
    res.writeHead('200',{'content-Type': `${type};charset=utf-8`})
    res.write(fs.readFileSync(path))
}

function getStaticFile(req,res){
    const {pathname}  = new URL(req.url, 'http://127.0.0.1:3000')
    const usePath = path.join(__dirname, 'static', pathname)
    if(fs.existsSync(usePath)){
        render(res,usePath, mime.getType(pathname.split('.')[1]))
    }else{
        res.writeHead('404',{'content-Type': 'text/html;charset=utf-8'})
        res.write(fs.readFileSync('./static/404.html','utf-8'))
    }
    res.end()
}


const route =   {
                    '/login': (req,res) => {
                        render(res, './static/login.html')
                        res.end()
                    },
                    '/home': (req,res) => {
                        render(res, './static/home.html')
                        res.end()
                    },
                    '/favicon.ico': (req,res) => {
                        render(res, './static/favicon.ico', 'image/x-icon')
                        res.end()
                    },
                    '/404': (req,res) => {
                        getStaticFile(req,res)
                    },
                }


module.exports = route