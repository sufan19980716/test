var express = require('express');
// 1. 引入模块
var cookieParser = require('cookie-parser');

var app = express();

app.listen(4000);

// 2. 设置请求解析
app.use(cookieParser());


app.get('/search',function(req,res){
  // 获取以前的搜索记录
  var cookie = req.cookies;// cookie
  // 取cookie中保存的记录
  var history = cookie.history || []; 
  // 获取当前搜索的记录
  var film = req.query.film;
  // 将其保存到数组中
  if(history.indexOf(film)==-1){
    history.push(film);
  }
  // 将数组重新保存到cookie中
  res.cookie('history',history);
  // 返回数据
  res.send('你的搜索记录:'+history);
});






