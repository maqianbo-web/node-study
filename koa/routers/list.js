const Router = require('koa-router')

const  router = new Router()


router.get('/',(ctx,next) => {
    ctx.body = JSON.stringify({
        data: 'list get'
    })
}).post('/',(ctx,next) => {
    ctx.body = JSON.stringify({
        data: 'list post'
    })
}).put('/:id',(ctx,next) => {
    ctx.body = JSON.stringify({
        data: 'list put'
    })
}).del('/:id',(ctx,next) => {
    ctx.body = JSON.stringify({
        data: 'list del'
    })
})

module.exports = router