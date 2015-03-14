/**
 * Created by mengxt on 2015/3/14.
 */
var path = require('path');
var fs = require('fs');
//normalize
console.log(path.normalize('.//a/d/../d'));
console.log(path.join(__dirname,'a','b','c','msg'));
console.log(path.resolve('/c','b','a','d')); //拼接绝对路径
console.log(path.dirname('./w.txt'));
console.log(path.basename('./w.txt'));
console.log(path.sep); //分割符斜杠
