var sd = require('silly-datetime');

console.log(sd);

// 格式化时间
var str = sd.format(new Date());
console.log(str);

str = sd.format(new Date(),'YYYY年MM月DD日');
console.log(str);

var now = new Date();
sd.locate('zh-cn');
var t = sd.fromNow(now-20000);
console.log(t);

t = sd.fromNow(now.getTime() + 20000);
console.log(t);

