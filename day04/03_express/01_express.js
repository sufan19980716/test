var express = require('express');
var app = express();// 创建应用对象

app.listen(4000);//监听端口


// 处理get的/请求
app.get('/',function(req,res){
  // 与http模块中的res.end功能一样
  res.end('this is express');
});

// 处理get的/index请求
app.get('/index',function(req,res){
  // 效果等同于res.end,但是可以返回中文
  res.send('这是express');
});

// 请求地址忽略大小写
app.get('/A',function(req,res){
  console.log(req.url);
  res.send('/A的请求');
});

// 请求地址的匹配忽略大小写,忽略参数,忽略锚点
app.get('/params',function(req,res){
  console.log(req.query);
  res.send('带参请求');
});

