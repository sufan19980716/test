var express = require('express');
var app = express();

app.listen(4000);


app.get('/',function(req,res){
  res.send('<h1>首页</h1>');
});

// /getdata?a=1&b=2
app.get('/getData',function(req,res){
  console.log(req.query);
  // 不返回数据,仅仅是结束请求
  res.end();
});

// 其他传参的方式
// 在请求路径前加: 可以将该段路径转变为参数的属性(key)
// 此种方式的参数的获取: req.params

// 精确匹配要放在模糊匹配的前面
app.get('/name/log',function(req,res){
  console.log(req.params);
  res.send('登录请求');
})

app.get('/name/:age',function(req,res){
  console.log(req.params);
  res.send('/name/age');
});


// 使用正则表达式
// /student开头,后面跟上6位数字
// 给可变的路径添加()来分组,程序会自动将分组的内容添加到req.params数组中

app.get(/^\/student\/([\d]{6})$/,function(req,res){
  console.log(req.params[0]);
  res.send(req.url);
})







