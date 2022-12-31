/**
 * 节流
 * 3. 将时间戳写法的特性与定时器写法的特性相结合，实现一个更加精确地节流
 */
function throttled3(fn, delay) {
    let timer = null
    let startTime = Date.now()
    return function() {
        let curTime = Date.now()
        let remaining = delay - (curTime - startTime)
        let context = this
        let args = arguments
        clearTimeout(timer)
        if(remaining <= 0) {
            fn.apply(context, args)
            startTime = Date.now()
        }else{
            timer = setTimeout(fn, remaining)
        }
    }
}