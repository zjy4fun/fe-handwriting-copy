//手写 new 操作符实现
function myNew(fn, ...args) {
    let obj = Object.create(fn.prototype)
    let res = fn.call(obj, ...args)
    if(res && (typeof res === "object" || typeof res === "function")) {
        return res
    }
    return obj
}

//main
function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.say = function() {
    console.log(this.age)
}

let p1 = myNew(Person, "lihua", 18)
console.log(p1.name)
console.log(p1)
p1.say()