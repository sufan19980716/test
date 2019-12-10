var fs = require('fs');

// 在当前路径下创建a文件夹
// 异步方法
console.log(1);
fs.mkdir('./b/c',{recursive:true},function(err){
  console.log(3);
  // err?console.log(err):console.log('成功');
  if(err){
    console.log(err);
    console.log(5);
    return ;
  }
  console.log('成功了');
  console.log(4);
});
console.log(2);


// 同步方法
// console.log(1);
// fs.mkdirSync('./a');
// console.log(2);
