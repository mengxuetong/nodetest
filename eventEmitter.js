/**
 * Created by mengxt on 2015/3/14.
 */
//event代表事件名，listener 代表事件处理函数。方括号内的参数代表可选参数
function Event(){

}
Event.prototype.addListener = function(eventType,listener){
    if(typeof listener !== 'function'){
        throw TypeError('监听器必须是一个函数');
    }
    if(!this._events){
        this._events = {};
    }
    if(this._events[type]){
        this._events[type].push(listener);
    }else{
        this._events[type] = [listener];
    }
};
Event.prototype.emit = function(type){
    if(!this._events){
        this._events = {};
    }
    var handler = this._events[type];
    var arr = new Array(arguments.length-1);
    for(var i = 0; i<arguments.length; i++){
        arr[i-1] = arguments[i];
    }
    for(var j = 0; j<handler.length; j++){
        handler[j].apply(this, arr);
    }

}
function  Boy(){
    this.name = "mengxuetong";
}
Boy.prototype = new Event();

function Girl(){}
var meng = new Boy();
console.log(meng.name);
var zheng = new Girl();
