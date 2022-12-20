const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
    }
}
//create 方法创建一个新的对象，并且将一个已存在对象作为新创建对象的原型
const me = Object.create(person)

me.name = 'Matthew'
me.isHuman = true
me.printIntroduction()