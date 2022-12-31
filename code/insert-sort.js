/**
 * 插入排序
 * 类似于整理扑克牌
 * 每轮循环整理 j 张，整理的过程是把新加入的这张牌放到一个合适的位置（大于前面小于后面）
 */
function insertSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let j = i
        let target = arr[j]
        while(j < 0 && arr[j - 1] > target) {
            arr[j] = arr[j - 1]
            j --
        }
        arr[j] = target
    }
    return arr;
}
console.log(insertSort([4,23,2,75,2,-10,34,0]))