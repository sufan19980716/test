
exports.showIndex = function(res){
  // ..bundleRenderer.renderToStream
  // /////
  // ....
  // ...
  // return '这是首页';
  res.end('这是首页');
}

exports.showInfo = function(res){
  // ////
  // ////
  // return '这是信息页';
  res.end('这是信息页');
}

exports.error = function(res){
  // return '这是错误页';
  res.end('这是错误页');
}


