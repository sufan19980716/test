var express = require('express');
var bdParser = require('body-parser');
var app = express();

app.listen(4000);

// 相当于之前写的
// application/x-www-form-urlencoded
app.use(bdParser.urlencoded({extended:true}));

app.get('/',function(req,res){
  res.render('show.ejs');
});

app.post('/tijiao',function(req,res){
  // post的参数通过req.body获取
  // 但是该属性默认是undefined
  // 需要借助于中间件body-parser
  console.log(req.body);

  res.send('接收参数');
});
