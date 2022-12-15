/**
 * settimeout 模拟实现 setinterval(带清除定时器的版本)
 * 题目描述:setinterval 用来实现循环定时调用 可能会存在一定的问题 能用 settimeout 解决吗
 */
function mySetTimeout(fn, t) {
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

let a = mySetTimeout(() => {
    console.log(111)
}, 1000)
let b = mySetTimeout(() => {
    console.log(222)
}, 1000)
