var User = require('./all.js');

User.updateOne({id:7},{$set:{name:"王小五"}},function(err,raw){
    console.log(err);
    console.log(raw);
})