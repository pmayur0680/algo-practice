// Dynamic Programming - Coin Change
// Write a function called coinChange which accepts two parameters: an array of denominations and a value.
// The function should return the number of ways you can obtain the value from the given collection of denominations.
// You can think of this as figuring out the number of ways to make change for a given value from a supply of coins.

// Examples:

// const denominations = [1, 5, 10, 25]
 
// coinChange(denominations, 1) // 1
// coinChange(denominations, 2) // 1
// coinChange(denominations, 5) // 2
// coinChange(denominations, 10) // 4
// coinChange(denominations, 25) // 13
// coinChange(denominations, 45) // 39
// coinChange(denominations, 100) // 242
// coinChange(denominations, 145) // 622
// coinChange(denominations, 1451) // 425663
// coinChange(denominations, 14511) // 409222339
// const m = 4;
// const  n = 5;
// let arr = Array.from(Array(m), () => new Array(n));
// console.log(arr); //  Output: [ [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ], [ <5 empty items> ] ]
function coinChange(denominations, value) {
    let dataTable = Array.from(Array(denominations.length + 1), () => new Array(value + 1));
    console.log(dataTable);
}
const denominations = [1, 5, 10, 25]
coinChange(denominations, 5);