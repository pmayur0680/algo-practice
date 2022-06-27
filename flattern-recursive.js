function flatten(inputArr){
    var resultArr = [];
    for (let i = 0; i < inputArr.length; i++) {
        if(Array.isArray(inputArr[i]))
        resultArr = resultArr.concat(flatten(inputArr[i]));
        else
        resultArr.push(inputArr[i]);
    }
    return resultArr;
}
  
  
  // flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

