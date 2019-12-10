var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  if(req.url=='/faviocn.ico'){
    return;
  }

  fs.readFile('./day02.txt',function(err,data){
    if(err){
      res.end("<h1>error</h1>");
      return;
    }
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});
    res.end(data);

  })


}).listen(4000);




