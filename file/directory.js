/**
 * Created by mengxt on 2015/3/14.
 */
var fs = require('fs');
//fs.mkdir('./test');
fs.readdir('./test', function(err,files){
    console.log(files);
});
fs.stat('./test', function(err, stat){
    console.log(stat);
});
fs.exists('./test', function(exists){
    console.log(exists);
});
fs.realpath('./test',function(err,path){
    console.log(path)
});
fs.utimes('./test',new Date(), new Date, function(){
    console.log('success');
});
//fs.chmod //读写模式
//fs.rename //修改名字
//fstruncate //清空文件

fs.watchFile('./b.txt', function(before,after){
    if(Data.parse(before.mtime)!= Data.parse(after.mtime))
    {
        fs.rename(path,'.\file\b.txt', function(){

        });
    }
});

