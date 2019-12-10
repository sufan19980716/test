var express = require('express');
var bdParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

var app = express();

var url = "mongodb://localhost:27017";
var ops = {useNewUrlParser:true};

app.listen(4000);

app.set('view engine','ejs');

app.use(bdParser.urlencoded({extended:true}));

// /请求,将数据库中的数据展示在页面上
app.get('/',function(req,res){
  MongoClient.connect(url,ops,function(err,client){
    if(err){
      console.log(err);
      res.send("网络错误");
      return ;
    }
    // 获取集合
    var col = client.db('web').collection('shop');
    // 查询数据
    col.find({}).toArray(function(err,docs){
      if(err){
        console.log(err);
        res.send("获取数据失败");
        client.close();
        return ;
      }
      // 如果没有查到数据,则docs为空数组
      // 查到了数据,则数据保存在docs数组中
      // 将docs返回给首页解析
      res.render('show',{docs:docs});
      client.close();
    });
  });
});


//  get /toAdd请求,跳转到新增页面
app.get('/toAdd',function(req,res){
  res.render('add');
})

// 处理post /add请求,将参数保存进数据库
app.post('/add',function(req,res){
  // 拿参数
  var body = req.body;
  // 将数据保存
  MongoClient.connect(url,ops,function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误');
      return ;
    }
    var col=client.db('web').collection('shop');
    col.insertOne(body,function(err,result){
      if(err){
        console.log(err);
        res.send('添加失败');
        client.close();
        return ;
      }
      if(result.result.n==0){
        res.send('插入数据失败');
      }else{
        // 保存数据成功,回到首页
        res.redirect('/');
      }
      client.close();
    });
  });
});

// get /del 请求,删除指定的数据
app.get('/del',function(req,res){
  var id = req.query.id; // id是字符串
  MongoClient.connect(url,ops,function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误');
      return ;
    }
    var col=client.db('web').collection('shop');
    // 数据库的_id是ObjectId类型,所以需要将字符串的id转换为ObjectId类型
    id = ObjectId(id);
    var filter = {_id:id}; // 删除的条件
    // console.log(filter);
    // 删除数据
    col.deleteOne(filter,function(err,result){
      if(err){
        console.log(err);
        res.send('删除失败');
        client.close();
        return ;
      }
      if(result.result.n==0){
        // 删了0条数据
        res.send('删除失败');
      }else{
        // 删除成功,刷新页面
        res.redirect('/');
      }
      client.close();
    });
  });
});


// get /update/xxxx请求,跳转到修改页面
app.get('/update/:id',function(req,res){
  // 获取id
  var id = req.params.id;
  // 将字符串的id转换为objectID类型
  id = ObjectId(id);
  var filter = {_id:id};
  // 获取对应id的完整的数据
  MongoClient.connect(url,ops,function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误');
      return;
    }
    var col=client.db('web').collection('shop');
    col.findOne(filter,function(err,result){
      if(err){
        console.log(err);
        res.send('查询数据失败');
        client.close();
        return ;
      }
      if(!result){
        // 没查到数据
        res.send('该数据不存在');
      }else{
        // 查到数据,跳转页面
        res.render('update',result);
      }
      client.close();
    });
  })
});

// post /update请求,接收参数,修改数据
app.post('/update',function(req,res){
  // 接收参数id
  var id = req.body.id;
  // 转换类型
  id = ObjectId(id);
  // 修改条件
  var filter = {_id:id};
  // 修改的数据
  var data = {};
  data.price = req.body.price;
  data.count = req.body.count;
  // 连接数据库修改数据
  MongoClient.connect(url,ops,function(err,client){
    if(err){
      console.log(err);
      res.send('网络错误');
      return ;
    }
    var col = client.db('web').collection('shop');
    col.updateOne(filter,{$set:data},function(err,result){
      if(err){
        console.log(err);
        res.send('修改失败');
        client.close();
        return ;
      }
      if(result.result.nModified==0){
        res.send('修改失败');
      }else{
        // 修改成功,回到首页
        res.redirect('/');
      }
      client.close();
    });
  })
});

