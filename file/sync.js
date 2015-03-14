/**
 * Created by mengxt on 2015/3/14.
 */
var fs = require('fs');
var data = fs.readFile('./index.html', function(err,data){
    if(err){
        throw err;
    }else {
        console.log(data.toString());
    }
}); //默认是异步，
var data = fs.readFileSync('./index.html','utf-8'); //同步没有回调，是直接返回的
console.log(data);

