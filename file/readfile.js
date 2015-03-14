/**
 * Created by mengxt on 2015/3/14.
 */
var fs = require('fs');
//fs.readFile('./read',function(){
//
//});
//fs.writeFile(filename,data,options);
//options {
//  flag r(read) w(write) a(append)
//  mode 0777 1.执行 2写入 4读取   三个数 权限
//  encoding 编写方式
// }
//callback();
//fs.writeFile('./write.txt',"写入的内容",{flag: 'w', mode：0777,encoding: 'utf8'},function(err){
//    if(err){
//        console.log(err);
//    }
//});
fs.readFile('./read','utf8',function(err,data){
    fs.writeFile('./w.txt',data,'utf8',function(err){
        if(err){
            throw err;
        }else{
            console.log('写入成功');
        }
    });
});

//fs.open(filename,flags,mode,callback(err,data));
fs.open('./read','r',function(err,data){
    //console.log(data);
    var buff = new Buffer(6);
    fs.read(data,buff,0,3,3, function(err,bytesRead,buffer){
        //console.log(bytesRead);
        //console.log(buff);
        //console.log(buff.toString());
        //fs.read(data)
    });
});