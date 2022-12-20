//数组扁平化
//1. 递归版本
function flatter(arr) {
    if (!arr.length) return
    return arr.reduce(
        (pre, cur) =>
            Array.isArray(cur) ? [...pre, ...flatter(cur)] : [...pre, cur], 
            []
    )
}
console.log(flatter([1, 2, [1, [2, 3, [4, 5, [6]]]]]))

//2. 迭代版本
function flatter2(arr) {
    if(!arr.length) return
    while(arr.some((item) => Array.isArray(item))){
        arr = [].concat(...arr)
    }
    return arr
}
console.log(flatter2([1, 2, [1, [2, 3, [4, 5, [6]]]]]))