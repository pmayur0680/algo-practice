// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that 
// counts the occurrences of the number in the array

// sortedFrequency([1,1,2,2,2,2,3],2) // 4 
// sortedFrequency([1,1,2,2,2,2,3],3) // 1 
// sortedFrequency([1,1,2,2,2,2,3],1) // 2 
// sortedFrequency([1,1,2,2,2,2,3],4) // -1
// Time Complexity - O(log n)
// Pseudocode
// Write helper findFirst and findLast function using binarySearch to find index of occurance of first
// and last for the target number
// if firstIndex not found return - 1
// else return last - first + 1
function sortedFrequency(arr, num) {
    let firstIdx = findFirst(arr, num);
    if (firstIdx == -1) return firstIdx;
    let lastIdx = findLast(arr, num);
    return lastIdx - firstIdx + 1;
  }
  
function findFirst(arr, num, low = 0, high = arr.length - 1) {
if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
    return mid;
    } else if (num > arr[mid]) {
    return findFirst(arr, num, mid + 1, high)
    } else {
    return findFirst(arr, num, low, mid - 1)
    }
}
return -1
}
  
function findLast(arr, num, low = 0, high = arr.length - 1) {
if (high >= low) {
    let mid = Math.floor((low + high) / 2)
    if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
    return mid;
    } else if (num < arr[mid]) {
    return findLast(arr, num, low, mid - 1)
    } else {
    return findLast(arr, num, mid + 1, high)
    }
}
return -1
}
  
console.log(sortedFrequency([1,1,2,2,2,2,3],1));