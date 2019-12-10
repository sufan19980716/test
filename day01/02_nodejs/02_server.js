// 1. 引入http模块
var http = require('http');

// 2. 创建服务器
var server = http.createServer(function(req,res){
  // 4. 处理请求,返回响应
  res.end('This is my first NODEJS page!');
});

// 3. 启动服务,监听端口
server.listen(4000);


