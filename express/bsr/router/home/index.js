
const express = require('express')

const router = express.Router()


// 路由级别中间件
router.get('/', (req,res) => {
    res.send('home')
})

router.get('/list', (req,res) => {
    console.log(1111)
    res.send(JSON.stringify([111,222,3333]))
})

// router.post('/list', (req,res) => {
//     console.log('post',req.body)
//     res.send('list')
// })

module.exports = router