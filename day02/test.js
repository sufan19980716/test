var fs = require('fs');
var start = new Date();
console.log(1);
fs.readFile('./1.rare',function(err,data){
  console.log(2);
});
// var data = fs.readFileSync('./1.rare');

console.log(3);

var end = new Date();
console.log(end-start);