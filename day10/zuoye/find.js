var User = require('./all.js');

User.find({},function(err,docs){
    err?console.log(err):console.log(docs);
})