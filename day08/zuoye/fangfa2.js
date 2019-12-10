var express = require("express");
var MongoClient = require('mongodb').MongoClient;
var app = express();


app.listen(4000);

app.use(express.static('./script'));

app.get('/',function(req,res){
  res.render('show2.ejs');
});

// 从数据库中获取数据
app.get('/getData',function(req,res){
  var url = "mongodb://localhost:27017";
  var ops = {useNewUrlParser:true};
  MongoClient.connect(url,ops,function(err,client){
    if(err){
      console.log(err);
      res.send({status:1,msg:'网络错误'});
      return ;
    }
    var col=client.db('web').collection('stu');
    col.find({}).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send({status:2,msg:"查询数据失败"});
        client.close();
        return ;
      }
      res.send({status:0,docs:docs});
      client.close();
    });
  })
});



