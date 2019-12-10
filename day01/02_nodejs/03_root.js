var http = require('http');
var fs = require('fs'); //file-system文件系统

var server = http.createServer(function(req,res){
  fs.readFile('03_root.html',function(err,data){
    if(err){
      console.log(err);
      // 返回响应
      res.end('request Error');
      return ;
    }
    // 读取到数据,返回数据
    console.log(data);
    res.end(data);
  });


});

server.listen(4000);