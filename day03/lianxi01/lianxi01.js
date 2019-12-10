var http = require('http');

var route = require('./route.js');

http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    return;
  }

  res.setHeader("Content-Type","text/html;charset=utf-8");


  if(req.url=='/showIndex'){

    // res.end(route.showIndex());
    route.showIndex(res);

  }else if(req.url=='/showInfo'){

    // res.end(route.showInfo());
    route.showInfo(res);

  }else{

    // res.end(route.error());
    route.error(res);

  }




}).listen(4000);


