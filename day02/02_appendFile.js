var  fs = require('fs');


fs.appendFile('./a.txt','哟哟哟',function(err){
  err?console.log('失败'):console.log('成功');
})