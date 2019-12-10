var express = require('express');
var app = express();

app.listen(4000);

// 设置根目录(将imgs文件夹设置为根目录)
app.use(express.static('./imgs'));
// 可以设置多个根目录
app.use(express.static('./images'));


app.get('/',function(req,res){
  res.render('02_show.ejs');
})

// 默认访问根目录下的index.html文件
app.use(express.static('./project'));



