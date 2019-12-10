const mongoose = require('mongoose');
const cfg = require('./config.json');

const objectId = mongoose.Types.ObjectId;

// 设置连接参数
const ip = cfg.ip;
const port = cfg.port;
const db = cfg.db;
const url = 'mongodb://'+ip+':'+port+'/'+db;

// 连接数据库
mongoose.connect(url,{useNewUrlParser:true,useUnifiedTopology:true});


/**
 * @method 根据给定的model和data,将data数据保存到指定的集合中
 * @param {mongoose.Model} model 模型名
 * @param {JSON} data 保存的数据
 * @param {function} callback 回调函数
 */
exports.add = function(model,data,callback){
  var o = new model(data);
  o.save(function(err,doc){
    callback(err,doc);
  })
}

/**
 * @method 根据给定的条件删除某个集合中的数据
 * @param {mongoose.Model} model 模型
 * @param {JSON} filter 条件
 * @param {function} callback 回调
 */
exports.del = function(model,filter,callback){
  // 判断filter中的属性有没有_id,如果有,将值转换类型
  var f = filter.hasOwnProperty('_id');
  if(f){// 有_id的值
    var _id = filter._id;
    if(toString.call(_id)!=='[object Object]'){
      // 不是一个对象,转换为objectID
      filter._id = objectId(_id);
    }
  }
  model.deleteOne(filter,function(err,raw){
    callback(err,raw);
  })
}

/**
 * @method 修改数据
 * @param {mongoose.Model} model 模型
 * @param {JSON} filter 修改的条件
 * @param {JSON} data 修改的数据
 * @param {function} callback 回调
 */
exports.modify = function(model,filter,data,callback){
  var f = filter.hasOwnProperty('_id');
  if(f){// 有_id的值
    var _id = filter._id;
    if(toString.call(_id)!=='[object Object]'){
      // 不是一个对象,转换为objectID
      filter._id = objectId(_id);
    }
  }
  model.updateOne(filter,{$set:data},function(err,raw){
    callback(err,raw);
  })
}


/**
 * @method 查询
 * @param {mongoose.Model} model 模型
 * @param {JSON} [filter] 查询的条件
 * @param {Object} [options] 查询的选项
 * @param {Number} [options.limit] 每页显示条数
 * @param {Number} [options.page] 第几页
 * @param {JSON} [options.sort] 排序规则
 * @param {function} callback 回调
 */
exports.find = function(model,filter,options,callback){
  if(arguments.length==2){
    callback = filter;// 将函数赋值给callback
    filter = {};// filter重置为空对象(无条件)
    // 设置选项的默认值
    options = {
      limit:5, // 默认每页显示5条数据
      page:1, // 默认显示第一页
      sort:{} // 默认不排序
    };
  }

  if(arguments.length==3){
    callback = options;
    options = {};
    var f1 = filter.hasOwnProperty('page');
    var f2 = filter.hasOwnProperty('limit');
    var f3 = filter.hasOwnProperty('sort');
    if(f1||f2||f3){
      // filter中含有其中一个属性,说明其是options
      options = filter;
      filter = {};// 重置filter无条件
    }
  }

  // 4个参数(model,filter,callback不需要变动)
  // 考虑options参数不全的情况,将其补全
  options.limit = options.limit || 5;
  options.page = options.page || 1;
  options.sort = options.sort || {};

  var ops = {};
  ops.limit = options.limit;
  ops.sort = options.sort;
  ops.skip = (options.page-1)*options.limit;

  // 查询
  model.find(filter,null,ops,function(err,docs){
    callback(err,docs);
  })
}
