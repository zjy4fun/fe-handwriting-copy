/**
 * 选择排序
 * 每次从剩下的数字中选择一个最小的加在结果集合中
 */
function selectSort(arr) {
    const len = arr.length
    let minIndex;
    for(let i = 0; i < len - 1; i++) {
        minIndex = i;
        for(let j = i; j < len; j++) {
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
        }
    }
    return arr;
}
console.log(selectSort([4,23,2,75,2,-10,34,0]))