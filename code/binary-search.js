/**
 * 二分查找
 *
 */
function binarySearch(arr, target, start, end) {
    let targetIndex = -1;
    let mid = Math.floor((start + end) / 2)

    if(arr[mid] === target) {
        targetIndex = mid;
        return targetIndex;
    }

    if(start >= end) {
        return targetIndex;
    }

    if(arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, end)
    }else{
        return binarySearch(arr, target, start, mid - 1);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const position = binarySearch(arr, 6, 0, arr.length - 1)
if(position !== -1){
    console.log(`目标元素在数组中的位置: ${position}`)
}else{
    console.log("目标元素不在数组中")
}