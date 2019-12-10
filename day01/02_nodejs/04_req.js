var http = require('http');

var server = http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    // 排除小图标请求的干扰
    return ;
  }
  // req: 请求对象
  console.log(req);
  /* 
  req.url
  可以获取到请求路径,请求参数,但是获取不到锚点以后的内容
  其获取到的是一个URL格式的字符串
  */
  console.log(req.method);

  



  res.end();


});

server.listen(4000);