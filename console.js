/**
 * Created by mengxt on 2015/3/14.
 */
console.log('%d', 88);
console.log('%s', 'meng');
console.log('%s', [1,2,3]);

console.assert(1==1,'不相等'); //表达式或函数 错误的话 ，就执行后面的参数提示，正确的话不提示。
console.log(require.cache)
console.log(require.resolve('./repl.js')); //模块绝对路径