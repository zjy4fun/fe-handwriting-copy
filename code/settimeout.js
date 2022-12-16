/**
 * settimeout 模拟实现 setinterval(带清除定时器的版本)
 * 题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
 *
 * 应用场景：
 * 在事件循环中，异步任务会进入任务队列中执行，像 setTimeout 和 setInterval 这种异步代码，会将里面的回调函数放入 WebAPI 提供的单独运行空间中，等待延迟时间以后放入任务队列
 * 不同的是，setTimeout 延迟时间以后直接放入任务队列，而 setInterval 会检查任务队列是否有上次未执行的异步任务，如果没有才会进入任务队列
 * 这就导致如果 setInterval 上次任务的执行仍在任务队列中，就会导致 setInterval 没有按照期待的时间间隔执行
 */
function myInterval(fn, t) {
    let timer = null
    function interval() {
        fn()
        timer = setTimeout(interval, t)
    }
    interval()
    return {
        cancel: () => {
            clearTimeout(timer)
        }
    }
}

let myIntervalA = myInterval(() => {
    console.log(111)
}, 1000)
let myIntervalB = myInterval(() => {
    console.log(222)
}, 1000)
