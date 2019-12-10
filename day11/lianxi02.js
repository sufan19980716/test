var express = require('express');
// 1. 引入模块
var cookieParser = require('cookie-parser');
var sd = require('silly-datetime');

var app = express();

app.listen(4000);

// 2. 设置请求解析
app.use(cookieParser());


app.get('/',function(req,res){
  // 从cookie中获取上次的数据,如果是第一次,则用后面的
  var time = req.cookies.time || '';
  var count = parseInt(req.cookies.count) || 1;
  // 使用cookie记录本次访问的数据
  res.cookie('time',sd.format(new Date()),{maxAge:24*60*60*1000});
  res.cookie('count',count+1);

  res.send('欢迎你,你已经访问了'+count+'次,上次登录时间: '+time);
});


