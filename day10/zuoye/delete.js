var User = require('./all.js');

User.deleteOne({id:5},function(err,raw){
    console.log(err);
    console.log(raw);
})