var express = require('express');
var app = express();

app.listen(4000);

app.use(function(req,res,next){
  var url = req._parsedUrl.pathname;
  console.log(url);
  if(url=='/'||url=='/show'||url=='/add'){
    // 放行
    next();
  }else{
    res.send("拦截了");
  }
})


app.get('/',function(req,res){
  res.send('<h1>首页</h1>');
})


// get /show请求
app.get('/show',function(req,res){
  res.send('/show请求');
})

// use /add请求
app.use('/add',function(req,res){
  res.send('/add请求');
})


// 上面的中间件没有成功处理的请求地址(地址错误)
// app.use(function(req,res){
//   res.send('请求地址错误');
// })