var mse = require('mongoose');
var oi = mse.Types.ObjectId;

var id = oi('5de71de34343b41818227e75');

console.log(toString.call(id));


// var d = require('./db.js');

// d.find('model','function');
// console.log('==========');
// d.find('model',{a:1},'function');
// console.log('==========');
// d.find('model',{limit:4,page:2},'function');
// console.log('==========');
// d.find('model',{a:1},{},'function');
