// 处理/message开头的请求
const express = require('express');
const sd = require('silly-datetime');

const router = express.Router();

const mydb = require('../model/myDB');
const db = mydb.db; // 数据库的增删改查操作
const Msg = mydb.model.Msg;// Message的Model


// /message/show 获取留言列表展示在首页上
router.get('/show',function(req,res){
  // 从数据库中获取留言的数据
  db.find(Msg,function(err,docs){
    if(err){
      console.log(err);
      res.render('error',{errMsg:"网络连接错误,获取留言信息失败"});
      return ;
    }
    // 将数据传递给浏览器解析
    res.render('index',{docs:docs});
  });
});

// /message/tijiao 发表留言,保存进数据库
router.post('/tijiao',function(req,res){
  // 取数据
  var data = req.body;//{username,message}
  // 添加time属性
  data.time = sd.format(new Date());
  // 保存进数据库
  db.add(Msg,data,function(err,raw){
    if(err){
      console.log(err);
      res.render('error',{errMsg:"留言失败"});
      return ;
    }
    // 留言成功,回到首页
    res.redirect('/');
  });
});

// /message/del
router.get('/del',function(req,res){
  var id = req.query.id;
  db.del(Msg,{_id:id},function(err,raw){
    // 返回响应是交给Ajax的回调函数处理的
    if(err){
      res.send({status:1,msg:"删除失败"});
      return ;
    }
    res.send({status:0,msg:"删除成功"});
  });
});

// /message//mod
router.get('/mod',function(req,res){
  var id = req.query.id;
  var msg = req.query.val;

  var filter = {_id:id};
  var data = {message:msg};
  db.modify(Msg,filter,data,function(err,raw){
    if(err){
      console.log(err);
      res.send({status:1,msg:'修改失败'});
      return;
    }
    res.send({status:0,msg:'修改成功'})
  })
})


module.exports = router;
