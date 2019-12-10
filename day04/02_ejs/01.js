// ejs模板引擎

// 引入模块
var ejs = require('ejs');

// 模拟数据
var data = {name:"张三"};

// 创建模板
var model = "大家好,我叫<%= name %>";

// 将数据填充到模板中
var str = ejs.render(model,data);

console.log(str);


