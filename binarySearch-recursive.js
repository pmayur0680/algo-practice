// Problem: Given a sorted array arr[] of n elements, write a function to search a given element x in arr[] 
// and return the index of x in the array.
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
   if (left > right) {
      return -1;
   }
   let pivot = Math.floor((left + right) / 2);
   if(arr[pivot] === target)
     return pivot;   
   else if(target < arr[pivot])
   return binarySearchRecursive(arr, target, left, pivot - 1);       
   else   
   return binarySearchRecursive(arr, target, pivot + 1, right);       
};
// const arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170];
// const target = 110;
const arr = [10, 20, 30, 40, 60, 110, 120, 130, 170];
const target = 175;
console.log(binarySearchRecursive(arr, target));
