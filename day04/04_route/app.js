var express = require('express');
// 引入学生的路由
var student = require('./route_student.js');
var app = express();

app.listen(4000);

// 接收以/student开头的请求,将其交给student路由来处理
// 比如/student/login,/student/logout
app.use('/student',student);



