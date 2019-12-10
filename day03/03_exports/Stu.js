function Stu(id,name){
  this.id = id;
  this.name = name;
}
Stu.prototype.play = function(){
  console.log(this.name+'正在玩耍');
}

Stu.prototype.study = function(){
  console.log(this.name+'正在学习');
}

module.exports = Stu;
// exports.Stu = Stu;
// exports = module.exports = Stu;


// var s1 = new Stu(1,'张三');
// s1.play();
// var s2 = new Stu(2,'李四');
// s2.study();





