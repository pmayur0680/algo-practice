// capitalizeFirst
// Write a recursive function called capitalizeFirst. Given an array of strings, 
// capitalize the first letter of each string in the array.

function capitalizeFirst(arr, result = []) {
    if(arr.length === 0) return result;
    let firstElement = arr[0];
    result.push(firstElement.split('')[0].toUpperCase() + firstElement.split('').slice(1).join('').toLowerCase());
    return capitalizeFirst(arr.slice(1), result);
}
const arr = ['apple', 'banana', 'orange', 'grapes'];
console.log(capitalizeFirst(arr));