
const Router = require('koa-router')

const router = new Router()

// router.prefix('/api')


const listRouter  = require('./list')
const userRouter  = require('./user')
const homeRouter  = require('./home')


router.use('/list', listRouter.routes(),listRouter.allowedMethods())
router.use('/user', userRouter.routes(),userRouter.allowedMethods())


router.use('/home', homeRouter.routes(),homeRouter.allowedMethods())
router.redirect('/','/home')

module.exports = router