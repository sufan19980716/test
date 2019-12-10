var express = require('express');
var sd = require('silly-datetime');
var mydb = require('./myDB');
var db = mydb.db; // 对数据库的增删改查操作
var Msg = mydb.model.Msg;// message模型

var app = express();

app.listen(4000);

app.get('/',function(req,res){
  res.redirect('/show?page=1');
});

app.get('/show',function(req,res){
  // 获取参数第几页
  var page = parseInt(req.query.page);
  if(isNaN(page)){
    // 不是数字
    res.send('<h1>参数不合法</h1>');
    return;
  }
  // 是数字
  page = page || 1;
  if(page<1){
    res.send('<h1>参数不合法</h1>');
    return;
  }

  // 参数合法,查询数据
  db.find(Msg,{page:page},function(err,docs){
    if(err){
      res.send('出错了');
      console.log(err);
      return;
    }
    res.render('index.ejs',{docs:docs});
  })
})

app.get('/tijiao',function(req,res){
  var query = req.query;
  query.time = sd.format(new Date());
  db.add(Msg,query,function(err,raw){
    if(err){
      res.send('发言失败');
      console.log(err);
      return ;
    }
    // 成功
    res.redirect('/');
  });
})

