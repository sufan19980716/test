var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var bdParser = require('body-parser');
var app = express();

var url = 'mongodb://localhost:27017';
var ops = {useNewUrlParser:true};

app.listen(4000);

app.use(bdParser.urlencoded({extended:true}));

app.use(express.static('./public'));

app.get('/',function(req,res){
  res.render('regist.ejs');
})

// 检查用户们是否存在
app.get('/check',function(req,res){
  // 获取请求参数
  var query = req.query; // {username:xxxx}

  MongoClient.connect(url,ops,function(err,client){
    if(err){
      console.log(err);
      res.send({status:1,msg:'网络错误'});
      return ;
    }
    // 连接成功
    var col = client.db('web').collection('user'); // 获取集合
    // 验证参数给定的username是否存在
    col.findOne(query,function(err,result){
      if(err){
        console.log(err);
        res.send({status:2,msg:"查询失败"});
        client.close();
        return ;
      }
      // 查询成功: 查到数据,没查到数据
      // 查到数据:result是一个对象
      // 没查到数据: result就是一个null
      if(result){ // 有值
        res.send({status:3,msg:"用户名存在"});
      }else{// 没有值
        res.send({status:0,msg:"用户名可用"});
      }
      client.close();
    })
  });

});


// 接收数据,保存进数据库
app.post("/regist",function(req,res){
  var body = req.body;
  //{username:xxx,password:xxxx}
  // 保存进数据库
  MongoClient.connect(url,ops,function(err,client){
    if(err){
      console.log(err);
      res.send("网络错误,注册失败");
      return ;
    }
    var col=client.db('web').collection('user');
    col.insertOne(body,function(err,result){
      if(err){
        console.log(err);
        res.send('注册失败');
        client.close();
        return ;
      }
      res.send('<h1>注册成功</h1>');
      client.close();
    });
  });
});
