// Given a set of positive integers, does a subset of that set sum to a desired sum
// Example: Is there a subset of [1, 2, 3, 7] that sums to 6?
// Pseudocode
// 1. create a 2D array of size (arr.size() + 1) * (target + 1) of type boolean
// using dynamic program tabular bottom-up approach
// create 2-D matrix of row = sets.length + 1; and col = num + 1;
// set value for column 0 and all rows to true as 0 can be generated for any set
// set value for all column except 0 and first rows to false as no number can be generated using zero
// loop thru rows and cols from 1 to end
// set value for each cell to value for same column and previous role
 // if that value is false and column index is more than previous row index
   // check for value in previous row and column = column index - previous row index
   // if true set true or leave false
// return result from last row and last column cell
function isSubsetSum(set, num) {
    var dpTable = [];
    for (let row = 0; row <= set.length; row++) {
        dpTable[row] = [];
        for (let col = 0; col <= num; col++) {            
             dpTable[row][col] = 0;                        
        }        
    }
    for (let row = 0; row <= set.length; row++) {
        dpTable[row][0] = true;
    }
    for (let col = 1; col <= num; col++) {            
        dpTable[0][col] = false;
    }
    for (let row = 1; row <= set.length; row++) {        
        for (let col = 1; col <= num; col++) {            
              // don't include the i'th element
           dpTable[row][col] = dpTable[row - 1][col];
           // if above result is false
           if(dpTable[row][col] == false && col >= set[row - 1])
              dpTable[row][col] = dpTable[row][col] || dpTable[row - 1][col - set[row-1]];  
        }        
    }
    // return end of table record
    return dpTable[set.length][num];
}    
let set = [ 1, 2, 3, 7];
let sum = 11;
console.log(isSubsetSum(set, sum));