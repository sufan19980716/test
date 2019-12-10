var md5 = require('./myMD5.js');
var fs = require('fs');

fs.readFile('./1.rar','utf-8',function(err,data){
  console.log(err);
  console.log(md5.jiami(data));
})



