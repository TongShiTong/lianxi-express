const express = require('express')
const app = express()
const path = require('path')

//设置模板存放的位置
app.set('views', path.resolve(__dirname, './views'))
//配置模板引擎，安装ejs,ejs作为express模板引擎
app.set('view engine', 'ejs')

app.get('/index', (req,res) => {
    res.render('redirect')
})

app.get('/welcome', (req,res) => {
    res.render('welcome')
})

app.post('/login', (req, res) => {
    res.redirect('/welcome')
})
app.listen(3002)