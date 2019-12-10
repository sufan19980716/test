// 连接数据库,创建schema以及model
var mongoose = require('mongoose');

var url = 'mongodb://localhost:27017/web';
var ops = {useNewUrlParser:true};
mongoose.connect(url,ops);

var Schema = mongoose.Schema;

var userSchema = new Schema({
  id:String,
  name:String,
  age:String
});

var User = mongoose.model('user',userSchema);

module.exports = User;
// exports.User = User;

