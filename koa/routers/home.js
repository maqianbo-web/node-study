const Router = require('koa-router')

const  router = new Router()


router.get('/',(ctx,next) => {
    ctx.body = `<html>
        <body>
            <h1>home页面</h1>
        </body>
    </html>`
})

module.exports = router