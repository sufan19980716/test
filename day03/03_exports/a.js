var name = '张三';

var age = 23;

function study(){
  console.log('正在学习');
}


// exports.name = name;

// exports.study = study;

// var exports = module.exports;
// exports = {
//   name :name,
//   study:study
// }

module.exports = {
  name :name,
  study:study
}

