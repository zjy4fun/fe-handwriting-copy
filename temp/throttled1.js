/**
 * 节流
 * 可以使用时间戳与定时器的写法
 * 1. 使用时间戳写法，事件会立即执行，停止触发后没有办法再次执行
 */
function throttled1(fn, delay = 500) {
    let oldTime = Date.now()
    return function(...args) {
        let newTime = Date.now()
        if (newTime - oldTime >= delay) {
            fn.apply(null, args)
            oldTime = Date.now()
        }
    }
}