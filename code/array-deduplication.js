//数组去重
function uniqueArr(arr) {
    return [...new Set(arr)]
}

const arr = [1,2,2,2,2,2,3,3,3,3]
const arr2 = uniqueArr(arr)
console.log(arr2)//[1,2,3]