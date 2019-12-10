var express = require('express');
var session = require('express-session');

var app = express();

app.listen(4000);


app.use(session({
  secret:"abc123",
  resave: true,
  saveUninitialized: true
}));

app.get('/',function(req,res){
  res.send('test');
})

// 设置session
app.get('/setsession',function(req,res){
  req.session.name = "这是session的name数据";
  req.session.age = "23";

  res.send('设置session成功');
});

// 获取session
app.get('/getsession',function(req,res){
  console.log(req.session);
  
  res.send('获取session成功');
})
