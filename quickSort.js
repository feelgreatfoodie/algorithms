function quickSort(arr, lo = 0, hi = arr.length - 1) {
  // begin with lo element as first in array and hi element as last
  // initialize base case
  if (arr.length <= 1) return arr

  // if an element finds its final spot, partition and quickSort recursively
  if (hi === lo) {
    const fixed = arr[hi]
    const left = arr.slice(0, hi)
    const right = arr.slice(hi + 1)
    
    return [...quickSort(left), fixed, ...quickSort(right)]
  }
  // if lo element > hi element, move lo right of hi, otherwise increment lo
  if (arr[lo] < arr[hi]) {
    return quickSort(arr, ++lo, hi)
  } else {
    const swapElement = arr[lo]
    arr[lo] = arr[hi - 1]
    arr[hi - 1] = arr[hi]
    arr[hi] = swapElement
    return quickSort(arr, lo, --hi)
  }
}

let list1 = [3, 7, 8, 5, 2, 1, 9, 5, 4]
let list2 = [38, 27, 43, 3, 9, 82, 10, 27]
let list = [...list1, ...list2]

console.log(quickSort(list))
