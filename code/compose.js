/**
 * 实现 compose 函数
 * 依次执行 fn1, fn2, fn3, fn4
 */
function fn1(x) {
    return x + 1
}

function fn2(x) {
    return x + 2
}

function fn3(x) {
    return x + 3
}

function fn4(x) {
    return x + 4
}

/**
 * 普通方法
 *
 * @param fns
 * @returns {function(...[*]): *}
 */
function compose1(...fns) {
    fns = fns.reverse()
    return function (...args) {
        let res
        fns.forEach((fn, index) => {
            if (index === 0) {
                // res = fn.apply(this, args)
                res = fn(args)
            } else {
                res = fn(res)
            }
        })
        return res
    }
}

const a1 = compose1(fn1, fn2, fn3, fn4)
console.log(a1(1))  // 1+4+3+2+1=11

function compose2(...fns) {


}

// const a2 = compose2(fn1, fn2, fn3, fn4);
// console.log(a2(1))  // 1+4+3+2+1=11