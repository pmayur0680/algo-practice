// Given a set of items, each with a weight and a value, determine the number of each item to include
// in a collection so that the total weight is less than or equal to a given limit and the total value is 
// as large as possible. 

// Bounded knapsack: Items cannot be repeated.
// Input:
// const values = [12, 2, 1, 4, 1];
// const weights = [4, 2, 1, 10, 2];
// const target = 15;

// Output:
// 17

// As our capacity is 15, we can add weights (4 + 1 + 10 = 15)
// So the maximum value we will get is 12(4) + 1(1) + 4(10) = 17
// Un-Bounded knapsack: Items can be repeated.

// 1. recursive solution
// Pseudocode
// 
const knapSack = (values, weights, n, target) => {      
  //base case: when no items are left or capacity becomes 0
  if(n < 0 || weights[n] > target){
    return 0;
  }
  // pick current item n in knapSack and recur for
  // remaining items (n - 1) with reduced capacity (weight - weights[n])
  //let include = values[n] + knapSack(values, weights, n - 1, target - weights[n]);
  let include = values[n] + knapSack(values, weights, n - 1, target - weights[n]);  
  // leave the current item n from knapSack and recur for
  // remaining items (n - 1)  
  let exclude = knapSack(values, weights, n - 1, target);
  // return maximum value we get by picking or leaving the current item
  return Math.max(include, exclude);
}
const values = [12, 2, 1, 4, 1];
const weights = [4, 3, 1, 10, 2];
const target = 15;

console.log(knapSack(values, weights, values.length - 1, target));