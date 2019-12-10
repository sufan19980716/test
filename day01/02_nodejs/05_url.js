var http = require('http');
var url = require('url');


http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    return ;
  }
  var urlStr = req.url; // 字符串请求
  console.log(urlStr); // 请求路径,参数
  // 将字符串转换为url对象
  /* 
  url.parse(字符串地址,[true])
  将URL格式的字符串转换为URL对象
  第二个参数默认false,如果为true
  则转换的URL对象会将字符串格式的参数也转为对象
  */
  var urlObj = url.parse(urlStr, true);
  console.log(urlObj);
  console.log('请求地址: ',urlObj.pathname);

  res.end();

}).listen(4000);