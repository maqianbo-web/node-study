
const express = require('express')

const loginRouter = require('./router/login')
const homeRouter = require('./router/home/index')

const app  = express()

//配置静态文件的中间件
app.use(express.static('public'))

// 配置解析post参数的中间件
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.set('views','./views')
app.set('view engine','ejs')

// 应用级别中间件
app.use(function(req,res,next){
    console.log('验证token')
    next()
})

app.use('/login',loginRouter)
app.use('/home',homeRouter)


// 错误中间件
app.use((req,res) => {
    res.status('404').send('页面不存在')
})

app.listen('3000',() => {
    console.log('server start')
})