var express = require('express');
var mongoose = require('mongoose');
var md5 = require('./myMD5.js');
var app = express();

app.listen(4000);

var url = 'mongodb://localhost:27017/web';
var ops = {useNewUrlParser:true};
mongoose.connect(url,ops);

var userSchema = new mongoose.Schema({
  username:String,
  password:String,
  photo:String
});

var User = mongoose.model('user',userSchema);

app.get('/',function(req,res){
  res.send(`
    <form action="/regist">
      用户名: <input type="text" name="username">
      密码: <input type="password" name="password">
      <input type="submit" value="注册">
    </form>
  `);
});

app.get('/regist',function(req,res){
  var query = req.query;
  var username = query.username;
  var password = query.password;
  // 加密密码
  password = md5.jiami(password);

  var data = {username:username,password:password};
  
  var u = new User(data);
  u.save(function(err,doc){
    console.log(err);
    res.send('xxx');
  })
});










