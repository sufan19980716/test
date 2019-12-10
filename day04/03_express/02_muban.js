var express = require('express');
var app = express();

app.listen(4000);


// 设置模板引擎
app.set('view engine','ejs');

// 处理请求
app.get('/',function(req,res){
  // 返回视图,渲染视图并返回
  res.render('01_ejs_1');
});

// /sendMsg
app.get('/sendMsg',function(req,res){
  // 第一个参数表示views文件夹下对应名称的模板文件
  // 第二个参数表示将要填充到模板文件中的数据
  // 返回给浏览器一个完整的页面
  var msg = "这是服务器返回的数据";
  res.render('01_ejs_2',{msg:msg});
});

// 
app.get("/err",function(req,res){
  // 第三个参数是一个回调函数
  res.render('01_ejs_2',{msg:"xxx"},function(err,html){
    if(err){
      console.log(err);
      res.send('出错了');
      return;
    }
    console.log(html);
    res.send(html);
  });
});

