var http = require('http');

http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    return ;
  }
  /* 
  res.end()
  结束请求,返回响应
  end的参数可以是字符串或者是buffer,表示返回给浏览器的数据
  如果没有参数,则仅仅是结束请求
  因为http请求遵循一次请求一次响应,所以该方法只能执行一次
  */
  
  // 设置响应头
  // res.setHeader("Content-Type","text/html;charset=utf-8");
  res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
  // res.end('张三');

  // 返回一个页面
  // var html = '';
  // html+='<html>';
  // html+='<head>';
  // html+='<meta charset="utf-8">';
  // html+='</head>';
  // html+='<body>';
  // html+='<h1>拼的页面</h1>';
  // html+='</body>';
  // html+='</html>';
  // res.end(html);

  // write方法可以向页面连续返回数据而不会结束请求
  res.write('<h1>write返回的数据</h1>');
  res.write('<h1>write的方法</h1>');
  res.end();








}).listen(4000);






