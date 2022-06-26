// Write a function called maxSubarraySum which accepts an array of integers and number called n, 
// The function should calculate maximum sum of n consecutive elements in the array
// maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2 ) - 10 > 2 + 8 is max, ([], 4) - null
// Algo: Sliding Window Pattern - subarray lookup
// Pseudocode
// 1. if array length is less than 2nd argument num, return null
// 2. intialize maxsum and tempsum = 0
// 3. loop for num times, find maxsum for first num elements
// 4. set tempsum = maxsum
// 5. loop for i = num to array length - 1
// 6. tempsum = tempsum + add next element and remove i - num th element
// 7. set maxsum = math.max(maxsum, tempsum)
// 8. return maxsum
function maxSubarraySum(arr, num) {    
    if(arr.length < num) return null;
    let maxSum = 0;
    let tempSum = 0;
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum; // 1 + 2 = 3
    for (let i = num; i < arr.length; i++) { // 2 to end
        tempSum = tempSum - arr[i - num] + arr[i]; // add current index to previous sum (keep 2) - (remove previous 1)
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}


maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2 );