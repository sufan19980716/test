var http = require('http');
var url = require('url');
var fs = require('fs');

http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    return;
  }
  // 解析请求地址
  var obj = url.parse(req.url,true);
  var pathname = obj.pathname;
  var username = obj.query.username;
  var password = obj.query.password;

  // fs.writeFile(username+'.txt',password,function(err){
  //   if(err){
  //     res.end('error error');
  //     return ;
  //   }
  //   res.end('success');
  // })
  
  // 将username和password写入users.txt文件中以|与前面的数据分割
  var data = username+':'+password;
  // 追加写入数据
  fs.writeFile('./users.txt',data+'|',{flag:'a'},function(err){
    if(err){
      console.log(err);
      res.end('write error');
      return ;
    }
    res.end('success');
  });


}).listen(4000);


