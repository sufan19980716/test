var fs = require('fs');

// 创建多层级的目录结构

// path 要创建的多层级的目录
/**
 * 
 * @param {string} path 
 */
function create(path,father){
  if(path.startsWith('./')){
    path = path.substr(2);
  }
  father = father || './';

  var arr = path.split('/');
  var dir = arr[0];
  fs.mkdirSync(father+dir);
  arr.shift();
  if(arr.length==0){
    return ;
  }
  var newPath = arr.join('/');
  father = father+dir+'/';
  create(newPath,father);
}

var path = './a/b/c/d';
create(path);





