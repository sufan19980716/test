var express = require('express');
// 1. 引入模块
var cookieParser = require('cookie-parser');

var app = express();

app.listen(4000);

// 2. 设置请求解析
app.use(cookieParser());

app.get('/',function(req,res){
  res.cookie('username','张三');
  res.cookie('age',"23");
  res.cookie('age',"100");
  res.cookie('expires','time',{expires:new Date(Date.now()+10000)});
  res.cookie('max','xxxx',{maxAge:10000});
  res.cookie('path','pathpath',{path:'/a'});
  res.send('设置cookie');
})

app.get('/getcookie',function(req,res){
  // 3. 获取cookie
  var cookies = req.cookies;
  console.log(cookies);
  res.send('获取cookie');
});



app.get('/a',function(req,res){
  var cookies = req.cookies;
  console.log(cookies);
  res.send('xxx');
})

