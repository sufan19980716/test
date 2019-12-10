var fs = require('fs');

// 定义一个方法delDir
// ***该方法的作用就是删除非空文件夹***
function delDir(path){
  // 判断path是不是一个文件夹
  var stats = fs.statSync(path);
  if(stats.isFile()){
    fs.unlinkSync(path);
    return ;
  }
  // 是文件夹
  // 获取文件夹内容
  var files = fs.readdirSync(path);
  // 遍历所有的内容并判断删除
  files.forEach(function(file){
    // 判断每一个file的状态
    var s = fs.statSync(path+'/'+file);
    if(s.isFile()){ // 是文件,删除文件
      fs.unlinkSync(path+'/'+file);
    }else{
      // 是文件夹,删文件夹
      delDir(path+'/'+file);
    }
  });
  // 删除文件夹本身
  fs.rmdirSync(path);
}

delDir('./a');












// fs.readdir('./a',function(err,files){
//   console.log(err);
//   // 遍历删除文件夹里的每一个元素
//   files.forEach(function(val){
//     fs.unlink('./a/'+val,function(err){
//       console.log(err);
//     })
//   });
//   // 删除文件夹
//   fs.rmdir('./a',function(err){
//     console.log(err);
//   })
// });









