// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, 
// write a function called countZeroes, which returns the number of zeroes in the array.

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0
// Time Complexity - O(log n)
// Pseudocode
// Since the input array is sorted, we can use Binary Search
  // Declate left = 0, right = arr.length - 1
  // if left <= right
    // find mid point based on left and right
    // if value at mid is zero and mid - 1 is one return mid, also true if only one zero there i.e mid == 0
    // else if value at mid is 1, change left to mid + 1 and recursively call findFirstZero
    // else if value at mid is 0, change right to mid - 1 and recursively call findFirstZero
  // if not found any zeroes return -1  
function countZeroes(arr){    
   let firstZero = findFirstZero(arr);
   if(firstZero === -1) return 0;
   return arr.length - firstZero;
}
function findFirstZero(arr, left = 0, right = arr.length - 1) {
    if(left <= right) {
        let mid = Math.floor((left + right)/2);
        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) 
        return mid;
        else if(arr[mid] == 1)
        return findFirstZero(arr, mid + 1, right);
        else
        return findFirstZero(arr, left, mid - 1);
    }
    return -1;
}

console.log(countZeroes([1, 1, 1, 0, 0, 0, 0]));