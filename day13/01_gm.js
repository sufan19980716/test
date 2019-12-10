var gm = require('gm');


gm('./1.jpg')
// .flip() // 垂直翻转
// .magnify() // 尺寸翻倍
// .rotate('green', 45)
// .blur(7, 3)
// .crop(300, 300, 150, 130)
// .edge(3)
.stroke("red")
.drawCircle(10, 10, 20, 10)
.font("1.ttf", 36)
.drawText(30, 20, "GMagick!")
.write('./2.jpg', function (err) {
  if (!err) console.log('crazytown has arrived');
})
