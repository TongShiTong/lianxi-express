const express = require('express')
const {Router} = require('express')
const router = Router()
const app = express()
let count = 0

router.get('/01', function (req, res, next) {
    ({count} = req.query)
    count = parseInt(count)
    count += 100
    // res.send(`经过加了两百后${count + 100}`)
    next()
}, function (req, res) {
    //res只能发送一次
    res.send(`经过加了一百后的结果是${count}`)
})

//直接请求
// app.get('/demo',function (req,res) {
//     res.send('hello world!')
// })

// router.get('/01',function (req,res) {
//     res.send('利用了官方的router')
// })

app.use(router)

app.listen(3000)