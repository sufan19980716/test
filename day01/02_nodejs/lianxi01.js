var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    return ;
  }
  var url = req.url;

  url = '.'+url+'.html';
  // url: /square  -->  ./square.html
  // url: /circle  -->  ./circle.html

  fs.readFile(url,function(err,data){
    if(err){
      console.log(err);
      res.end('error');
      return ;
    }
    res.end(data);
  });






  /* if(url=='/square'){
    console.log('进来方形了');
    fs.readFile('./square.html',function(err,data){
      if(err){
        console.log(err);
        res.end('error');
        return ;
      }
      res.end(data);
    })
  }else if(url=='/circle'){
    fs.readFile('./circle.html',function(err,data){
      if(err){
        console.log(err);
        res.end('error');
        return ;
      }
      res.end(data);
    })
  }else{
    res.end('error error');
  } */

});


server.listen(4000);





