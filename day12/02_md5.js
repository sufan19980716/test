// 引入nodejs自带的加密模块crypto
var crypto = require('crypto');

// 创建一个明文密码
var pwd = '123';

// 加密

pwd = crypto.createHash('md5').update(pwd).digest('base64');

console.log(pwd);

// 二次加密
pwd = pwd.substr(3,7);
console.log(pwd);
// 加盐
pwd = "www"+pwd+"com";
pwd = crypto.createHash('md5').update(pwd).digest('base64');

console.log(pwd);
