/**
 * 两个大数相加
 */
function add(a, b) {
    //取两个数字的最大长度
    let maxLength = Math.max(a.length, b.length)
    a = a.padStart(maxLength, 0)
    b = b.padStart(maxLength, 0)
    let t = 0
    let f = 0//进位
    let sum = ""
    for(let i = maxLength - 1; i >= 0; i --){
        t = parseInt(a[i]) + parseInt(b[i]) + f
        f = Math.floor(t/10)
        sum = t % 10 + sum
    }
    if(f !== 0){
        sum = '' + f + sum
    }
    return sum;
}


console.log(add('123','456'))
console.log(add('1','123456789'))