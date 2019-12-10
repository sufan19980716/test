// 引入模块
const express = require('express');
const bdParser = require('body-parser');
const message = require('./route/message.js');

// 创建app对象
const app = express();

// 监听端口
app.listen(4000);

// 设置视图模板引擎
app.set('view engine','ejs');

// 设置post请求解析方式
app.use(bdParser.urlencoded({extended:true}));

// 设置静态资源路径(设置根目录)
app.use(express.static('./public'));


/* 本案例主要分为两个模块:留言模块(/message/xxx)
  用户模块(/user/xxx)
*/
// 处理/请求,显示留言页面
app.get('/',function(req,res){
  res.redirect('/message/show');
});

// 处理留言相关的请求(/message开头的请求)
app.use('/message',message);
