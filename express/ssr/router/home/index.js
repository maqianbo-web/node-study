
const express = require('express')

const router = express.Router()


// 路由级别中间件
router.get('/', (req,res) => {
    const list = [111,222,333,444,555]
    res.render('home',{list})
})


module.exports = router