var fs = require('fs');

fs.writeFile('./a.txt','哈哈哈',{flag:'a'},function(err){
  err?console.log('出错了'):console.log('成功');
})





