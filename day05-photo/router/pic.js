var express = require('express');
var file = require('../model/file.js');
var router = express.Router();


// 展示图片
// /pic/show?dirName=xxxx
router.get('/show',function(req,res){
  // 获取参数
  var dirName = req.query.dirName;
  // 读取文件夹的内容
  // 获取正确的路径
  var path = './uploads/'+dirName;
  file.getDirContents(path,function(err,files){
    if(err){
      console.log(err);
      res.send('获取图片失败');
      return ;
    }
    // 传递的数据有两个:
    // 被点击的文件夹,该文件夹里面的内容
    res.render('show',{pics:files,dir:dirName});
  });

});

// 删除指定图片
// /pic/del?picName=xxxx&dirName=xxxx
router.get('/del',function(req,res){
  var picName = req.query.picName;
  var dirName = req.query.dirName;
  var path = dirName+'/'+picName;
  // console.log(path);
  file.del(path,function(err){
    if(err){
      console.log(err);
      res.send('删除失败');
      return ;
    }
    res.redirect('/pic/show?dirName='+dirName);
  });
});

// 上传图片
// 跳转到上传页面
// /pic/upload
router.get('/upload',function(req,res){
  // 上传页面需要选择上传到哪个文件夹
  // 将所有文件夹传递给上传页面
  file.getDirContents('./uploads',function(err,files){
    if(err){
      console.log(err);
      res.send('获取文件夹列表失败');
      return ;
    }
    res.render('upload',{dirs:files});
  });
})

router.post('/upload',function(req,res){
  file.upload(req,function(err,result){
    if(err){
      // err有错误信息:出错了
      console.log(err);
      res.send('上传失败');
      return ;
    }
    // 上传成功,跳转到首页
    res.redirect('/');
  })
});



module.exports = router;