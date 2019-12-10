var http = require('http');
var qs = require('querystring');



http.createServer(function(req,res){

  // 只处理post的/tijiao请求,其他请求不处理
  if(req.url=='/tijiao'&&req.method.toLowerCase()=='post'){
    /* 
    因为nodejs是单线程非I/O阻塞,为了追求效率,数据是一小段一小段上传接收的
    而这样就会产生两种状态:
      正在接收数据,接收完成
    */
    // data对应正在接收数据
    var all = '';// 表示接收的数据
    req.on('data',function(chunk){
      // chunk表示每次上传的一小段数据
      // 将每一次上传的数据拼接到all上面
      all+=chunk;
    });
    // end 对应接收完成
    req.on('end',function(){
      // 数据接收完成,开始处理接收到的数据
      console.log(all);// 未解析未解码的字符串
      // 解析数据
      var obj = qs.parse(all);
      console.log(obj);
      res.end('over');
    });

  }





}).listen(4000);


