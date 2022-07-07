// LCS Problem Statement: Given two sequences, find the length of longest subsequence present
// in both of them. A subsequence is a sequence that appears in the same relative order, 
// but not necessarily contiguous. For example, “abc”, “abg”, “bdf”, “aeg”, ‘”acefg”, 
// .. etc are subsequences of “abcdefg”. 
// Problem can be solved by dynamic programming building bottom-up table
// helper max function
function max(a, b) {
    if(a > b)
     return a;
    else
     return b;
}
function LCS(x, y, m = x.length, n = y.length) {
  // Build 2-D table m + 1 by n + 1 size  
  let L = new Array(m + 1);
  for (let i = 0; i < L.length; i++) {
    L[i] = new Array(n + 1);    
  }
  // Fill the table using 3 conditions
  // 1. when i = 0, j = 0, value for cell is 0
  // 2. If value of row - 1 and col - 1 is same, value of cell = diagonal cell value + 1
  // 3. else value of cell =  max( row-1, col and row col -1)
  var i, j;
  for (i = 0; i <= m; i++) {
    for (j = 0; j <= n; j++) {
        if(i == 0 || j == 0)        
        L[i][j] = 0;
        else if(x[i - 1] === y[j - 1])
        L[i][j] = L[i - 1][j - 1] + 1;
        else
        L[i][j] = max(L[i - 1][j], L[i][j - 1]);
    }    
  }
     // solution if value in last row and col
     return L[m][n];   
}

var s1 = "AGGTAB";
var s2 = "GXTXAYB";
console.log(LCS(s1, s2));