
const express = require('express')

const router = express.Router()


// 路由级别中间件

router.get('/', (req,res) => {
    const {userName,passWord} = req.query
    if(userName === 'ma' && passWord ==='123'){
        res.send(JSON.stringify({ok:1}))
    }else{
        res.send(JSON.stringify({ok:0}))
    }
})

router.post('/', (req,res) => {
    const {userName,passWord} = req.body
    if(userName === 'ma' && passWord ==='123'){
        res.send(JSON.stringify({ok:1}))
    }else{
        res.send(JSON.stringify({ok:0}))
    }
})


module.exports = router