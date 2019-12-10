var express = require('express');
var fd = require('formidable');
var sd = require('silly-datetime');
var fs = require('fs');
var path = require('path');//获取后缀名

var app = express();

app.listen(4000);


app.get('/',function(req,res){
  // 没有设置模板引擎,所以ejs后缀名必须添加
  res.render('upload.ejs');
})
// app.get等方法的返回值就是app,方便链式调用
.post('/upload',function(req,res){
  var form = new fd.IncomingForm();
  form.uploadDir = './';
  form.parse(req,function(err,fields,files){
    if(err){
      console.log(err);
      res.send('上传失败');
      return ;
    }
    // 获取uname的值
    var name = fields.uname;
    // 获取图片对象
    var pic = files.pic;
    // 图片的路径
    var oldPath = pic.path;
    var str = sd.format(new Date(),"DDHHmmss");
    var extname = path.extname(pic.name);
    var newPath = name+str+extname;
    // 改名
    fs.rename(oldPath,newPath,function(err){
      if(err){
        res.send('改名失败');
        return;
      }
      res.send('上传成功');
    });
  })
})







