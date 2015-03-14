/**
 * Created by mengxt on 2015/3/14.
 */
console.log(1);
setImmediate(function(){
    console.log('优先级更低'); //比nextTick 的执行优先级低
});
process.nextTick(function(){
    console.log('3');
}); //执行环境完了之后才执行里面的函数
process.nextTick(function(){
    console.log('4');
    setImmediate(function(){
        console.log(9);
    });
}); //执行环境完了之后才执行里面的函数
process.nextTick(function(){
    console.log('5');
}); //执行环境完了之后才执行里面的函数
process.nextTick(function(){
    console.log('6');
}); //执行环境完了之后才执行里面的函数
console.log(2);
setImmediate(function(){
    console.log(8);
});