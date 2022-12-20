//some用于检测数组是否含有至少一个满足条件的元素
const array = [1, 2, 3, 4, 5]
const even = (element) => element % 2 === 0
console.log(array.some(even))//true
