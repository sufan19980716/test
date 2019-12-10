
var d = require('./db.js');

d.find('model','function');
console.log('==========');
d.find('model',{a:1},'function');
console.log('==========');
d.find('model',{limit:4,page:2},'function');
console.log('==========');
d.find('model',{a:1},{},'function');
