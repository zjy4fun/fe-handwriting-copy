/**
 * 节流
 * 2. 使用定时器写法，delay毫秒后第一次执行，第二次事件停止触发后依然会再一次执行
 */
function throttled2(fn, delay = 500) {
    let timer = null
    return function (...args) {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, args)
                timer = null
            }, delay);
        }
    }
}