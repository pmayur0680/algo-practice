// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// exponential time complexity (2 power n)
// function fib(n){
//    if(n <= 2) return 1;
//    return fib(n - 1) + fib(n - 2);
// }
// optimize O(n) it by storing solutions of subproblems (dynamic programming), time complexity reduces to linear.
// memoization top down approach
function fibMemoization(n, memo=[]) {
   if(n <= 2) return 1;
   if(memo[n] !== undefined) return memo[n];
   var res = fib(n-1, memo) + fib(n-2, memo);
   memo[n] = res;
   return res;
}
// tabulation O(n) bottom up approach better than memoization compare to space complexity

function fibTabulation(n) {
   if(n <= 2) return 1;
   var fibNums = [0, 1, 1];
   for (let i = 3; i <= n; i++){
      fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
   }
   return fibNums[n];
}
console.log(fibTabulation(100));