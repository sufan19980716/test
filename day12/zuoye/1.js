var express = require('express');
var cookieParser = require('cookie-parser');
var bdParser = require('body-parser');
var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/web';
var ops = {useNewUrlParser:true};
mongoose.connect(url,ops);
var userSchema = new mongoose.Schema({
  username:String,
  password:String,
  photo:String
});
var User = mongoose.model('user',userSchema);

var app = express();

app.listen(4000);

app.use(bdParser.urlencoded({extended:true}));
app.use(cookieParser());

app.get('/',function(req,res){
  var username = req.cookies.username;
  if(username){
    res.send('欢迎你,'+username);
    return ;
  }
  res.render('login.ejs');
})

app.post('/login',function(req,res){
  var body = req.body;
  var username = body.username;
  var password = body.password;
  User.find({username:username},function(err,docs){
    if(err){
      res.send('网络错误');
      return ;
    }
    // docs查询结束
    if(docs.length==0){
      // 空数组,没查到数据
      res.send('用户名错误');
      return ;
    }
    // username正确,查到了一条数据
    if(password!=docs[0].password){
      res.send('密码错误');
      return ;
    }
    // 用户名密码都正确,保存登录状态
    res.cookie('username',username);

    res.send('登录成功,欢迎你,'+username);
  });
});

app.get('/regist',function(req,res){
  res.render('regist.ejs');
});

app.post('/regist',function(req,res){
  var body = req.body;
  body.photo = "";
  var u = new User(body);
  u.save(function(err,doc){
    if(err){
      res.send('注册失败');
    }
    // 注册成功
    // 记录登录状态(不需要用户再次输入用户名密码登录)
    res.cookie('username',body.username);
    // 跳转到某个页面
    res.send('欢迎你,'+body.username);
  })
})
