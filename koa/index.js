const Koa = require('koa')
const static = require('koa-static')
const path = require('path')

const router = require('./routers/index')


const app = new Koa()


// 应用级别中间件
// app.use((ctx,next) => {

//     ctx.body = 'hello world'
// })

// 静态资源中间件
app.use(static(path.join(__dirname,'public')))

// 路由级别中间件
app.use(router.routes()).use(router.allowedMethods())


app.listen('3000',() => {
    console.log('server start')
})