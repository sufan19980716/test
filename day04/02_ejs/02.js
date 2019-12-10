var http = require('http');
var ejs = require('ejs');
var fs = require('fs');
var url = require('url');


http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){return ;}

  // 解析请求地址,获取其中的请求参数
  var urlObj = url.parse(req.url,true);
  // 获取参数中name属性的值
  var name = urlObj.query.name;

  // 获取模板
  fs.readFile('./temp.html',function(err,data){
    if(err){
      console.log(err);
      res.end('error');
      return ;
    }
    data = data.toString();//将buffer转换为String
    // 将数据填充到模板中,数据必须是json对象
    var hobbies = ['读书','跳舞','旅游'];
    var html = ejs.render(data,{name:name,age:10,hobbies:hobbies});
    res.end(html);
  });

}).listen(4000);



