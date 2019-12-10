const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// 创建User相关的schema
const UserSchema = new Schema({
  username:String,
  password:String,
  nickname:String,
  avatar:{type:String,default:"/photo/1.jpg"}
});

// 创建message相关的schema
const MsgSchema = new Schema({
  username:String,
  message:String,
  time:String
},{
  collection:'message'
});

const User = mongoose.model('user',UserSchema);
const Msg = mongoose.model('msg',MsgSchema);

module.exports = {
  User:User,
  Msg:Msg
}

