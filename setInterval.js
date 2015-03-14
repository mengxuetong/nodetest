/**
 * Created by mengxt on 2015/3/14.
 */
var i = 0;
var timer = setInterval(function(){
    console.log(i++);
}, 1000);
setTimeout(function(){
    //clearInterval(timer)
    timer.unref(timer);
},4000)
