/**
 * Created by mengxt on 2015/3/14.
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');

function Me(name){
    this.name = name;
}
util.inherits(Me,EventEmitter);
var me = new Me('MENG');

me.addListener('boss', function(){
    console.log(' i can');
});
me.emit('boss');
me.once('晚上饿了',function(){
    console.log('吃饼干');
});
me.removeListener('晚上饿了',function(){
    console.log('移出成功');
});
me.emit('晚上饿了');

