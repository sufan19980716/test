var fs = require('fs');

fs.stat('./1.txt',function(err,stats){
  console.log(err);
  if(stats.isFile()){
    console.log('这是一个文件');
  }else{
    console.log('这是一个文件夹');
  }
});


