/**
 * Created by mengxt on 2015/3/14.
 */
var buf1 = new Buffer(12);
buf1.fill(1)
console.log(buf1);
var buf2 = new Buffer([1,2,3])
console.log(buf2)

var buf3 = new Buffer("珠峰培训",'utf-8');
console.log(buf3);

var buf4 = new Buffer(1);
console.log(buf4[0]);

var str = "珠峰培训";
var buf = new Buffer(str);
console.log(str.length);
console.log(buf.length);
var buf = new Buffer("珠峰培训");
buf.fill(10,3,6);//value,start,end 填充体会相应元素
//buf.write('学院',6,7); //value,start,total
console.log(buf.toString());
var buf6 = Buffer.concat([buf1,buf2]);
console.log(buf6.toString());
console.log(Buffer.isBuffer("")); //判断是否为Buffer 对象
console.log(Buffer.byteLength); //判断值的字节个数

