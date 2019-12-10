var express = require('express');
var mongoose = require('mongoose');
var bdParser = require('body-parser');
var ObjectId = mongoose.Types.ObjectId;

var app = express();

app.listen(4000);

var url = 'mongodb://localhost:27017/web';
// 连接数据库,一旦连接成功,只要服务器不关,该链接就不会关闭断开
mongoose.connect(url,{useNewUrlParser:true});

var Schema = mongoose.Schema;
var userSchema = new Schema({
  id:String,
  name:String,
  age:String
});
var User = mongoose.model("user",userSchema);

app.use(bdParser.urlencoded({extended:true}));

app.get('/',function(req,res){
  User.find({},function(err,docs){
    if(err){
      console.log(err);
      res.send('出错了');
      return;
    }
    res.render('show.ejs',{docs:docs});
  })
});

// 跳转到添加页面
app.get('/add',function(req,res){
  res.render('add.ejs');
})

// 接收提交的数据保存进数据库
app.post('/add',function(req,res){
  // 获取参数
  var body =req.body;
  // console.log(body);
  // res.end();
  // 保存数据
  var o = new User(body);
  o.save(function(err,doc){
    if(err){
      console.log(err);
      res.send('failed');
      return ;
    }
    res.send('success');
  })
});

// /del请求,删除数据
app.get('/del',function(req,res){
  // 参数
  var id = req.query.id;

  // 方法3
  id = ObjectId(id);
  User.deleteOne({_id:id},function(err,raw){
    if(err){
      res.send('删除失败');
      return ;
    }
    res.redirect('/');
  });

  // 方法2
  // User.findByIdAndRemove(id,function(err,doc){
  //   if(err){
  //     res.send('删除失败');
  //     return ;
  //   }
  //   console.log(doc);
  //   res.redirect('/');
  // });

  // 方法1
  // User.findByIdAndDelete(id,function(err,doc){
  //   if(err){
  //     res.send('删除失败');
  //     return ;
  //   }
  //   console.log(doc);
  //   res.redirect('/');
  // });
});

// /mod请求,修改数据
app.get('/mod',function(req,res){
  var id = req.query.id;
  var name = req.query.name.trim();
  if(name==''){
    res.redirect('/');
    return;
  }

  var data = {name:name};
  User.updateOne({_id:id},{$set:data},function(err,raw){
    if(err){
      res.send('修改失败');
      return ;
    }
    // console.log(raw);
    res.redirect('/');
  })

  // User.findByIdAndUpdate(id,data,function(err,doc){
  //   if(err){
  //     res.send("修改失败");
  //     return ;
  //   }
  //   // 修改成功
  //   console.log(doc);
  //   res.redirect('/');
  // })

});


