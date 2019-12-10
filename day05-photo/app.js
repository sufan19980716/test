var express = require('express');
var dir = require('./router/dir.js');
var pic = require('./router/pic.js');
var bdParser = require('body-parser');

var app = express();

app.listen(4000);

// 设置模板引擎
app.set("view engine","ejs");

// 设置根目录
app.use(express.static('./public'));
app.use(express.static('./uploads'));

// 设置请求解析方式
app.use(bdParser.urlencoded({extended:true}));

// 显示首页
app.get('/',function(req,res){
  res.redirect('/dir/show');
})

// 处理dir相关的请求
app.use('/dir',dir);

// 处理pic相关的请求
app.use('/pic',pic);

