var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var app = express();


app.listen(4000);


app.get('/',function(req,res){
  var url = 'mongodb://localhost:27017';
  MongoClient.connect(url,function(err,client){
    if(err){
      console.log(err);
      res.send('获取数据失败');
      return ;
    }
    var col=client.db('web').collection('stu');
    col.find({}).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send('获取数据失败');
        client.close();
        return ;
      }
      // console.log(docs);
      res.render('show.ejs',{docs:docs});
      client.close();
    });
  })
})


