var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var app = express();

app.listen(4000);

// app.set('view engine','ejs');

app.get('/',function(req,res){
  res.render('regist.ejs');
});

app.get('/regist',function(req,res){
  var query = req.query; 
  // {username:xx,password:xxx}
  // 连接数据库
  var url = 'mongodb://localhost:27017';
  MongoClient.connect(url,function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误');
      return ;
    }
    // 获取数据库中的集合
    var col=client.db('web').collection('user');
    // 插入数据
    col.insertOne(query,function(err,result){
      if(err){
        console.log(err);
        res.send('注册失败,网络错误');
        client.close();
        return ;
      }
      res.send('注册成功');
      client.close();
    });

  });
});


