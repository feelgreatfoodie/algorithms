function mergeSortRecursive(arr) {
  if (arr.length <= 1) return arr

  const middle = Math.floor(arr.length / 2)
  const left = arr.slice(0, middle)
  const right = arr.slice(middle)

  const leftSorted = mergeSortRecursive(left)
  const rightSorted = mergeSortRecursive(right)

  return merge(leftSorted, rightSorted)
}
// compare arrays item by item and return the concatenated result
function merge(left, right) {
  const result = []
  let indexLeft = 0
  let indexRight = 0

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) result.push(left[indexLeft++])
    else result.push(right[indexRight++])
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
}

let list1 = [3, 7, 8, 5, 2, 1, 9, 5, 4]
let list2 = [38, 27, 43, 3, 9, 82, 10, 27]
let list = [...list1, ...list2]

console.log(mergeSortRecursive(list))
