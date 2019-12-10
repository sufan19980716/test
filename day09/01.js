var mongoose = require('mongoose');

// mongoose对mongodb的操作都基于Schema
var Schema = mongoose.Schema;

// 通过Schema定义数据结构
var Stu = new Schema({
  id: Number,
  name: String
},{
  collection:"stu"//指定使用的集合名称,不用默认的
});

// 连接数据库
mongoose.connect("mongodb://localhost:27017/web",{useNewUrlParser:true});


// 根据Schema编译一个model
// 第一个参数为字符串,即将使用的数据库中的集合的名字(默认是该集合的复数形式 stus)
// 第二个参数为Schema对象
// 返回值为一个model,用于创建实例对象
var StuModel = mongoose.model('stu',Stu);

// 删除数据
// StuModel.deleteOne({id:1},function(err,raw){
//   console.log(err);
//   console.log(raw);
// })



// 修改数据
// StuModel.updateOne({id:1},{$set:{name:"Jim"}},function(err,raw){
//   console.log(err);
//   console.log(raw);
// })



// 查询数据
// StuModel.find({},function(err,docs){
//   console.log(err);
//   console.log(docs);
// })


// 创建对象
var s1 = new StuModel({id:1,name:"张三"});
// 保存数据库
s1.save(function(err,doc){
  console.log(err);
  console.log(doc);
});

