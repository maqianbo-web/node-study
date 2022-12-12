const Router = require('koa-router')

const  router = new Router()


router.get('/',(ctx,next) => {
    ctx.body = JSON.stringify({
        data: 'user get'
    })
}).post('/',(ctx,next) => {
    ctx.body = JSON.stringify({
        data: 'user post'
    })
}).put('/:id',(ctx,next) => {
    ctx.body = JSON.stringify({
        data: 'user put'
    })
}).del('/:id',(ctx,next) => {
    ctx.body = JSON.stringify({
        data: 'user del'
    })
})

module.exports = router