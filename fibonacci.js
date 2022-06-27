// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence.
// exponential time complexity (2 power n)
// function fib(n){
//    if(n <= 2) return 1;
//    return fib(n - 1) + fib(n - 2);
// }
// optimize O(n) it by storing solutions of subproblems (dynamic programming), time complexity reduces to linear.
function fib(n, memo=[]) {
   if(n <= 2) return 1;
   if(memo[n] !== undefined) return memo[n];
   var res = fib(n-1, memo) + fib(n-2, memo);
   memo[n] = res;
   return res;
}
console.log(fib(100));