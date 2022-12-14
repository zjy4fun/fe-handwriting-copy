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
                res = fn.apply(this, args)
                // res = fn(args)
            } else {
                res = fn(res)
            }
        })
        return res
    }
}

const a1 = compose1(fn1, fn2, fn3, fn4)
console.log(a1(1))  // 1+4+3+2+1=11

//接受参数是一个的情况，如 compose2(fns)(1)
function compose2(...fns) {
    return function (x) {
        return fns.reduceRight((accumulator, currentValue) => currentValue(accumulator), x)
    }
}

const a2 = compose2(fn1, fn2, fn3, fn4);
console.log(a2(1))  // 1+4+3+2+1=11

//接受参数个数不确定的情况，如 compose(fns)(1,2,3...)
//此时需要解构出第一个函数，并传入初始参数，因为第一个函数的参数特殊
function compose3(...fns) {
    fns = fns.reverse()
    return function (...args) {
        let [...[firstFn, ...restFn]] = fns
        if(!firstFn)return
        if (restFn.length === 0) {
            return firstFn.apply(this, args)
        }else{
            let initValue = firstFn.apply(this, args)
            return restFn.reduceRight((accumulator, currentValue) => currentValue(accumulator), initValue)
        }
    }
}

console.log(fn3(fn2(fn1(1,2))) === compose3(fn3, fn2, fn1)(1,2))//true