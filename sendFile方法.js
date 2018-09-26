const express = require('express')
const path = require('path')
const app = express()
app.get('/', function (req,res) {
    res.sendFile(__dirname + '/06index.html')
//    这个时候可能忘记写/，可以用path.join方法解决
//    安装path,并引入
//    res.sendFile(path.join(__dirname, '06index.html'))

//    发送json文件
//     res.json({name: 'wangcai', age: 5})
//    qs模块可以把对象转成字符串
});

app.listen(3000)