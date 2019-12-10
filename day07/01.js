// 使用nodejs连接数据库
// 引入模块,获取客户端对象
var MongoClient = require('mongodb').MongoClient;

// 数据库连接地址
var url = "mongodb://localhost:27017";

// 连接数据库
// err:连接失败的信息
// client:连接成功后得到的连接对象
MongoClient.connect(url,function(err,client){
  if(err){
    console.log('连接失败');
    console.log(err);
  }else{
    console.log('连接成功');
    // console.log(client);

    // 向数据库中保存数据
    var data = {id:1,name:"jim",age:23};
    // 获取数据库:参数为数据库名称
    // 如果数据库或集合不存在,则自动创建
    var db = client.db('web');
    // 获取集合:参数为集合名称
    var col = db.collection('user');

    // 查询数据
    col.find({}).toArray(function(err,docs){
      if(err){
        console.log(err);
        return ;
      }
      console.log(docs);
      client.close();
    });






    /* // 向集合中插入数据
    // 第一个参数为json数据
    // 第二个参数为回调,result表示成功的信息
    col.insertOne(data,function(err,result){
      if(err){
        console.log(err);
        return ;
      }
      console.log(result);
      client.close(); // 结束,关闭连接
    }); */

    // 关闭连接
    // client.close();
  }
});


