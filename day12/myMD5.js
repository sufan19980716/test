var crypto = require('crypto');

/**
 * @method 加密数据
 * @param {String} pwd 被加密的数据
 * @returns {String} nPwd 加密后的数据
 */
exports.jiami = function(pwd){
  // 第一次加密
  pwd = crypto.createHash('md5').update(pwd).digest('base64');
  // 处理加密后的数据
  pwd = pwd.substr(4,9);
  pwd = "I love "+pwd;
  pwd = crypto.createHash('md5').update(pwd).digest('base64');
  return pwd;
}



