var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    return ;
  }
/*
/-->/index.html    project  /index.html
/css/index.css --> project  /css/index.css
/js/index.js -->   project  /js/index.js
/img/1.jpg -->     project  /img/1.jpg
*/
  var path = req.url;
  if(path=='/'){
    path = '/index.html';
  }

  // res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});

  fs.readFile('project'+path,function(err,data){
    if(err){
      console.log(err);
      res.end('<h1>error</h1>');
      return ;
    }
    res.end(data);
  });


}).listen(4000);




