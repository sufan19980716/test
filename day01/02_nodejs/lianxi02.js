var http = require('http');
var url = require('url');

http.createServer(function(req,res){
  if(req.url=='/favicon.ico'){
    return ;
  }
  res.setHeader("Content-Type","text/html;charset=utf-8");
  // 将字符串的URL转换为对象格式,取其中的请求地址
  var urlObj = url.parse(req.url,true);
  var pathname = urlObj.pathname; // 请求地址
  var query = urlObj.query; // 请求参数对象
  // 登录操作
  if(pathname=='/login'){
    // 登录请求
    // 获取参数的值
    var username = query.username;
    var password = query.password;
    if(username=='zhangsan'&&password=='123'){
      // 登录成功
      res.end('<h1>登录成功</h1>');
      return ;
    }
    res.end('<h1>用户名或密码错误</h1>');
    return ;
  }
  // 其他请求地址,显示登录页面
  res.write('<form action="/login">');
  res.write('<input type="text" name="username">');
  res.write('<input type="password" name="password">');
  res.write('<input type="submit" value="登录">');
  res.write('</form>');
  res.end();






}).listen(4000);




