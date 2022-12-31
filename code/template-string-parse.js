/**
 * 实现模板字符串解析功能
 */
function render(template) {
    let computed = template.replace(/\{\{(\w+)\}\}/g, function(match, key) {
        return data[key]
    })
    return computed
}


let template = '我是{{name}}, 年龄{{age}}, 性别{{sex}}'
let data = {
    name: '张三',
    age: 18,
    sex: '男'
}
const res = render(template, data)
console.log(res)