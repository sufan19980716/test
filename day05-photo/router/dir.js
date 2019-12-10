var express = require('express');
var file = require('../model/file.js');

var router = express.Router();

// 处理所有与文件夹相关的请求
// 显示文件夹,新建文件夹,删除文件夹
// /dir/show
router.get('/show',function(req,res){
  // 获取uploads文件夹下的所有文件夹
  // 文件夹路径不是相对于该文件的路径
  // 而是相对于项目的根目录(启动时的所在位置)
  file.getDirContents("./uploads",function(err,files){
    if(err){
      console.log(err);
      res.send('访问出错,稍后再试');
      return ;
    }
    res.render('index',{dirs:files});
  })
  

});

// 新建文件夹
// /dir/create
router.get('/create',function(req,res){
  // 跳转到新建文件夹的页面
  res.render('create');
});

router.post('/create',function(req,res){
  // 接收请求参数,创建文件夹
  var dirName = req.body.dirName; // 文件夹名称
  file.createDir(dirName,function(err){
    if(err){
      console.log(err);
      res.send('创建失败');
      return ;
    }
    // 成功,跳回到首页(重定向)
    res.redirect('/');
  });
});

// 删除文件夹
// /dir/del/dirName
router.get('/del/:dirName',function(req,res){
  // 获取被删除文件夹名称
  var dirName = req.params.dirName;
  file.del(dirName,function(err){
    if(err){
      console.log(err);
      res.send('failed');
      return ;
    }
    // 删除成功,刷新首页
    res.send('success');
  })
});






// 暴露
module.exports = router;