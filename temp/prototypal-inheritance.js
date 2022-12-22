//原型继承
/**
 * ref https://zh.javascript.info/prototype-inheritance
 * 
 * 在javascript中，对象有一个特殊的隐藏属性 [[Prototype]]，要么为null，要么就是另一个对象的引用
 * 该对象被称为“原型”
 * 属性 [[Prototype]] 是内部的而且是隐藏的，但是这儿有很多设置它的方式
 * 其中一个就是特殊的名字 __proto__
 * 
 * 原型链可以很长，但是有限制：
 * 1. 引用不能形成闭环，会报错
 * 2. __proto__的值可以是对象，也可以是null，其他类型都会被忽略
 * 3. 只能有一个[[Prototype]]，一个对象不能从其他两个对象获得继承
 * 
 * > __proto__是 [[prototype]]的因历史原因而留下来的getter/setter
 * 
 */
let animal = {
    eats: true,
    walk(){
        console.log("Animal walk")
    }
}
let rabbit = {
    jumps: true
}
rabbit.__proto__ = animal  //设置 rabbit.[[Prototype]] = animal

console.log(rabbit.eats)//true
console.log(rabbit.jumps)//true
rabbit.walk()//Animal walk


let longEar = {
    earLength: 0,
    __proto__: rabbit
}
longEar.walk()
console.log(longEar.jumps)