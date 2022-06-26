// Problem: Given a sorted array arr[] of n elements, write a function to search a given element x in arr[] 
// and return the index of x in the array.
function binarySearchIterative(nums, target) {
    let left = 0, right = nums.length - 1;
    while(left <= right) {
       let pivot = Math.floor((left + right) / 2);
       if(nums[pivot] === target)
          return pivot;   
       else if(target < nums[pivot])
          right = pivot - 1;
       else   
          left = pivot + 1;    
    }           
       return -1;
};
// const arr = [10, 20, 30, 50, 60, 80, 110, 130, 140, 170];
// const target = 110;
const arr = [10, 20, 30, 40, 60, 110, 120, 130, 170];
const target = 175;
console.log(binarySearchIterative(arr, target));
