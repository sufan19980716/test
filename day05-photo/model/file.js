// 负责文件的操作
var fs = require('fs');
// var rf = require('rimraf');
var fse = require('fs-extra');
var fd = require('formidable');
var sd = require('silly-datetime');


/**
 * @method 读取某个文件夹的内容
 * @param {string} dirName 被读取的文件夹
 * @param {function} callback 回调函数
 */
exports.getDirContents = function(dirName,callback){
  fs.readdir(dirName,function(err,files){
    callback(err,files);
  });
}

/**
 * @method 根据给定名称创建文件夹
 * @param {string} dirName 文件夹名称
 * @param {function} callback
 */
exports.createDir = function(dirName,callback){
  // 创建的文件夹要保存在uploads下
  fs.mkdir('./uploads/'+dirName,function(err){
    callback(err);
  });
}

/**
 * @method 删除给定文件或文件夹
 * @param {string} path 将要删除的文件或文件夹
 * @param {function} callback 回调
 */
exports.del = function(path,callback){
  fse.remove('./uploads/'+path,function(err){
    callback(err);
  });
  // rf('./uploads/'+dirName,function(err){
  //   callback(err);
  // });
}

// 处理文件的上传与改名
/**
 * @method 接收请求对象req,将其解析,得到里面的参数
 * @param {*} req 请求对象
 */
exports.upload = function(req,callback){
  var form = new fd.IncomingForm();
  form.uploadDir = './temp';

  form.parse(req,function(err,fields,files){
    if(err){
      // 出错,返回错误信息,第二个参数表示没有数据
      callback(err,null);
      return ;
    }
    // 文件夹名称
    var dirName = fields.dirName;
    // 图片对象
    var pic = files.pic;
    // 旧路径
    var oldPath = pic.path;
    // 后缀名
    var oldName = pic.name;
    var arr = oldName.split('.');
    var ext = arr[arr.length-1];
    var str1 = sd.format(new Date(),'YYYYMMDDHHmmss');
    var str2 = Math.floor(Math.random()*10000);
    var newName=str1+str2+'.'+ext;//文件新名称
    // 新路径 uploads/xxx/xxx.jpg
    var newPath = './uploads/'+dirName+'/'+newName;
    // 改名
    fs.rename(oldPath,newPath,function(err){
      if(err){
        callback(err,null);
        return ;
      }
      // 修改成功,上传成功,第一个参数表示错误信息
      // 成功则错误信息为null
      callback(null,'success');
    });
  });
}


