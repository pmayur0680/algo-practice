// Radix sort works on sorting based on individual digit position. Instead comparion between element, it sort digit by digit starting from least significant digit to most significant digit. Works best when data is between range of elements.


// Helpers - Radix Sort
// 1. getDigit(num, place) - returns digit in num at the given place value
function getDigit(num, i) {
    // to find 10th value in 1232 with i = 1 (0 - ones, 1 - ten, 2 - hundredth, 3 thousandth, reverse)
    // Math.pow(10, 1) = 10, num / 10 = 123.2, floor = 123 % 10 = 3
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
// 2.digitCount(num) - returns the numbers of digit in num
function digitCount(num) {
    if( num === 0 ) return 1;
    // 232 - log10 = 2, 10 pow 2 = 100
    // 2 + 1 = 3
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}
// 3. mostDigits(num) Given an array of numbers, return the number of digits in the largest numbers
function mostDigits(num) {
    let maxDigits = 0;
    for (let i = 0; i < num.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(num[i]));        
    }
    return maxDigits;
}
// Pseudocode - radixSort
// 1 define a function that accepts list of numbers
// 2 find out how many digits the largest number has using mostDigits
// 3. Loop from k = 0 to largest digits
// For each iteration create empty bucket for each digit 0 to 9 - array with 10 subarrays
// Place each number in corresponding bucket based on its kth digit
// 4 replace existing values in array with values in bucket from 0 to 9
// 5 return list at end
function radixSort(arr) {
    let maxDigitsCount = mostDigits(arr);
    for (let k = 0; k < maxDigitsCount; k++) {
        // create array with 10 empty subarrays
        let digitsBuckets = Array.from({length:10}, () => []);
        for (let i = 0; i < arr.length; i++) {
            digitsBuckets[getDigit(arr[i], k)].push(arr[i]);
        }
        arr = [].concat(...digitsBuckets);
    }
    return arr;
}


console.log(radixSort([10, 2, 456, 393, 4000]));