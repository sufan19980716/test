// 使用别人的模块处理文件上传的请求
// formidable模块

var http = require('http');
var fd = require('formidable');
var fs = require('fs');
var sd = require('silly-datetime');

http.createServer(function(req,res){
  if(req.url=='/tijiao'&&req.method.toLowerCase()=='post'){
    // 获取表单对象
    var form = new fd.IncomingForm();

    // 修改上传临时保存路径
    form.uploadDir = './';

    // 解析请求
    // req: 请求对象
    // err: 解析出错的错误信息
    // fields: 请求传递过来的文本域的参数
    // files: 上传的文件
    form.parse(req,function(err,fields,files){
      if(err){
        console.log(err);
        res.end('error');
        return ;
      }
      // console.log(fields,files);
      // console.log(files);
      var pic = files.pic; // 上传的图片
      var path = pic.path; // 上传图片的路径
      var name = pic.name; // 上传图片的名称
      var arr = name.split('.');
      var ext = arr[arr.length-1];//图片后缀名
      // 获取时间字符串
      var str=sd.format(new Date(),'DDHHmmss');
      // 设置新名称
      var newName = str+'.'+ext;

      // 重命名上传文件
      fs.rename(path,newName,function(err){
        // console.log(err);
        res.end();
      });
    });

  }

}).listen(4000);

