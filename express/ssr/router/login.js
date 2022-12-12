
const express = require('express')

const router = express.Router()


// 路由级别中间件

router.get('/', (req,res) => {
   res.render('login',{error: '',isShow: false})
})

router.post('/',(req,res) => {
   const {userName,passWord} = req.body
    if(userName === 'ma' && passWord ==='123'){
        res.redirect('/home')
    }else{
      res.render('login',{error: '账号密码错误',isShow: true})
    }
})


module.exports = router