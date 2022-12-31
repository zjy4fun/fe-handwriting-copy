/**
 * 函数柯里化
 * 把接受多个参数的函数 变换为 接受一个单一参数（最初函数的第一个参数）的函数，并且返回接受余下的参数而且返回结果的新函数的技术
 * @param fn
 * @param args
 */
function currying(fn, ...args) {
    const length = fn.length
    let allArgs = [...args]
    const res = (...newArgs) => {
        allArgs = [...allArgs, ...newArgs]
        if (allArgs.length === length) {
            return fn(...allArgs);
        } else {
            return res;
        }
    }
    return res;
}

const add = (a, b, c) => a + b + c
console.log(add.length)//3
const a = currying(add, 5)
console.log(a(2, 3))//10