console.log('这是a.js');

for(var i=1;i<5;i++){
  console.log(i);
}
var x = 10;
function add(){
  console.log('111');
}
var y = function(){
  console.log('222');
}


require('./b.js');