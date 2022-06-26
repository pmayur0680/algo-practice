// Divide and Conquer - findRotatedIndex
// Write a function called findRotatedIndex which accepts a rotated array of sorted numbers and an integer.
// The function should return the index of the integer in the array. If the value is not found, return -1.

// Constraints:

// Time Complexity - O(log n)

// Space Complexity - O(1)

// findRotatedIndex([3,4,1,2],4) // 1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8) // 2
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3) // 6
// findRotatedIndex([37,44,66,102,10,22],14) // -1
// findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12) // -1
// findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16) // 5
// Pseudocode
// 1. Find pivot point where next element is smaller than pivot
// 2. Divide array into two sorted subarray and perform binary search
function findRotatedIndex(array, num) {
   var pivot = findPivot(array)
   if (pivot > 0 && num >= array[0] && num <= array[pivot - 1]) {
     return binarySearch(array, num, 0, pivot - 1);
   } else {
     return binarySearch(array, num, pivot, array.length - 1);
   }
 }
 
 function binarySearch(array, num, start, end) {
   if (array.length === 0) return -1;
   if (num < array[start] || num > array[end]) return -1;
 
   while (start <= end) {
     var mid = Math.floor((start + end) / 2);
     if (array[mid] === num) {
       return mid;
     } else if (num < array[mid]) {
       end = mid - 1;
     } else {
       start = mid + 1;
     }
   }
   return -1;
 }
 // Pseudocode
 // 1. if array has only one element or first element is already smaller than last return 0
 // 2. intialize start 0 and end last index
 // 3. run while start <= end
   // 4. find mid point
   // 5. value of arr[mid] > next element, we found pivot, return mid + 1
   // 6. else move start pointer to mid + 1
   // 7. else move end pointer to mid - 1
 function findPivot(arr) {
   if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
   var start = 0
   var end = arr.length - 1;
   while (start <= end) {
     var mid = Math.floor((start + end) / 2);
     if (arr[mid] > arr[mid + 1]) return mid + 1
     else if (arr[start] <= arr[mid]) {
       start = mid + 1
     } else {
       end = mid - 1
     }
   }
 }