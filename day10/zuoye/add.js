var User = require('./all.js');


var obj = {
    id:1,
    name:'王八蛋',
    age:55
}


User.create(obj,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('保存成功');
})





var u = new User(obj);
u.save(function(err,doc){
    console.log(err);
    console.log(doc);
})


