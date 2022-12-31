/**
 * 归并排序
 * O(nlogn)
 */
function merge(left, right) {
    let res = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i])
            i++
        } else {
            res.push(right[j])
            j++
        }
    }
    if (i < left.length) {
        res.push(...left.slice(i))
    } else {
        res.push(...right.slice(j))
    }
    return res;
}

function mergeSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    const mid = Math.floor(arr.length / 2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
    return merge(left, right);
}

console.log(mergeSort([4,23,2,75,2,-10,34,0]))