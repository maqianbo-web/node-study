
const fs = require('fs')


function render(res,data, type='application/json'){
    res.writeHead('200',{'content-Type': `${type};charset=utf-8`})
    res.write(JSON.stringify(data))
    res.end()
}


const api = {
                '/api/login': (req,res) => {
                    const {searchParams} = new URL(req.url, `http://127.0.0.1`)
                    if(searchParams.get('userName') === 'maqianbo' && searchParams.get('passWord') === '123456'){
                        render(res, {name: 'maqianbo',password: '123456',status: 'ok'})
                    }else{
                        render(res, {tooltip: '账号密码错误',status: 'error'})
                    }
                },
                '/api/postLogin': (req,res) => {
                    let data = ''
                    req.on('data',chunk => data += chunk)
                    req.on('end',() => {
                        const searchParams = JSON.parse(data)
                        if(searchParams.userName === 'maqianbo' && searchParams.passWord === '123456'){
                            res.end(JSON.stringify({name: 'maqianbo',password: '123456',status: 'ok'}))
                        }else{
                            res.end(JSON.stringify({tooltip: '账号密码错误',status: 'error'}))
                        }
                    })

                    
                },
            }


module.exports = api