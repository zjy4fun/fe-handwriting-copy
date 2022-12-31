/**
 * 快速排序
 */
function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    const cur = arr[arr.length - 1]
    const left = arr.filter((v, i) => v <= cur && i !== arr.length - 1);
    const right = arr.filter((v) => v > cur);
    return [...quickSort(left), cur, ...quickSort(right)]
}

console.log(quickSort([4,23,2,75,2,-10,34,0]))