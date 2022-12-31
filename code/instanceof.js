/**
 * 手写 instanceof 操作符实现
 */
function myInstanceof(left, right) {
    while(true) {
        if(left === null) {
            return false;
        }
        if(left.__proto__ === right.prototype) {
            return true
        }
        //一直向上寻找原型链
        left = left.__proto__
    }
}

let a = 12.3
let b = {
    name: 'jack'
}
console.log(myInstanceof(a, b))//false
