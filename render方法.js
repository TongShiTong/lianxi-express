const express = require('express')
const app = express()
const path = require('path')
let count = 998

setInterval(() => {
    count += 3
}, 3000)

//设置模板存放的位置
app.set('views', path.resolve(__dirname, './views'))
//配置模板引擎，安装ejs,ejs作为express模板引擎
app.set('view engine', 'ejs')

app.get('/index', (req, res) => {
    res.render('index', {count})
})

app.get('/secondPage', (req,res) => {
    res.render('second')
})

app.listen(3001)