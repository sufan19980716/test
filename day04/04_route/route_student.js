var express = require('express');
// 创建路由对象
var router = express.Router();


// 处理与学生相关的请求
router.get('/login',function(req,res){
  res.send('<h1>学生的登录请求</h1>');
});
router.get('/logout',function(req,res){
  res.send('<h1>学生的退出登录请求</h1>');
});
router.get('/regist',function(req,res){
  res.send('<h1>学生的注册请求</h1>');
});
router.get('/search',function(req,res){
  res.send('<h1>学生的查询请求</h1>');
});


// 暴露路由对象
module.exports = router;

