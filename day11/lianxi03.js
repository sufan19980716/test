var express = require('express');
// 1. 引入模块
var cookieParser = require('cookie-parser');
var bdParser = require('body-parser')


var app = express();

app.listen(4000);

// 2. 设置请求解析
app.use(cookieParser());
app.use(bdParser.urlencoded({extended:true}));





app.get('/',function(req,res){
    var username = req.cookie.username;
    if(username){
        res.send('欢迎你',+username);
    }else{
        res.send('login.ejs');
    }
})


app.post('/login',function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    if(username!='zhangsan'){
        res.send('用户名错误')
        return;
    }
    if(password!='123'){
        res.send('密码错误')
        return;
    }
    res.cookie('username',username)
    res.send('欢迎你',+username)
})