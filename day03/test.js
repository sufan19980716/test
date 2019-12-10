var http = require('http')
var fs = require('fs');


http.createServer(function(req,res){

  res.writeHead(200,{"Content-Type":"image/png;charset=utf-8"});

  var data = fs.readFileSync('./project/images/timg.jpg');

  res.end(data);


}).listen(4000);




