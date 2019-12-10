var fs = require('fs');

fs.readdir('./',function(err,files){
  if(err){
    console.log(err);
    return ;
  }
  console.log(files);
  console.log('============');

  (function iterate(i){
    if(i>=files.length){
      return ;
    }
    fs.stat(files[i],function(err,stats){
      if(err){
        console.log(err);
        return;
      }
      if(stats.isFile()){
        console.log(files[i] + " 是一个文件");
      }else{
        console.log(files[i] + " 是一个文件夹");
      }
      // 检查结束,开始下一轮遍历
      iterate(++i);
    })
  })(0);




  /* files.forEach(function(val){
    fs.stat(val,function(err,stats){
      if(err){
        console.log(err);
        return;
      }
      if(stats.isFile()){
        console.log(val + " 是一个文件");
      }else{
        console.log(val + " 是一个文件夹");
      }
    });
  }); */
});

var sum = 0;
(function total(i){
  if(i>100){
    console.log(sum);
    return ;
  }
  sum+=i;
  total(++i);
})(1);





// fs.readdir('./',{withFileTypes:true},function(err,files){
//   console.log(err);
//   console.log(files[0].name);
  // for(var key in files[0]){
  //   console.log(key);
  //   console.log(files[0][key]);
  // }
// });



